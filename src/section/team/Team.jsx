"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import rose from "@/public/images/Rose.png";

const BALLS = Array.from({ length: 7 }).map((_, i) => ({ id: i }));

function Team() {
  const ballRefs = useRef([]);
  const containerRef = useRef(null);
  const velocities = useRef(
    BALLS.map(() => ({ x: Math.random() * 8 - 4, y: Math.random() * 8 - 4 }))
  );
  const dampingFactor = 0.98;
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const containerBounds = container.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - previousMousePosition.current.x;
      const deltaY = mouseY - previousMousePosition.current.y;
      previousMousePosition.current = { x: mouseX, y: mouseY };

      ballRefs.current.forEach((ball, index) => {
        if (!ball) return;

        const rect = ball.getBoundingClientRect();
        const ballX = rect.left + rect.width / 2;
        const ballY = rect.top + rect.height / 2;

        const dx = mouseX - ballX;
        const dy = mouseY - ballY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < rect.width) {
          velocities.current[index].x += deltaX * 0.5;
          velocities.current[index].y += deltaY * 0.5;
        }
      });
    };

    const updatePositions = () => {
      ballRefs.current.forEach((ball, index) => {
        if (!ball) return;

        const velocity = velocities.current[index];
        const rect = ball.getBoundingClientRect();
        const ballRadius = rect.width / 2;

        let newX = rect.left + velocity.x;
        let newY = rect.top + velocity.y;

        if (
          newX <= containerBounds.left ||
          newX + rect.width >= containerBounds.right
        ) {
          velocity.x *= -1;
        }
        if (
          newY <= containerBounds.top ||
          newY + rect.height >= containerBounds.bottom
        ) {
          velocity.y *= -1;
        }

        ballRefs.current.forEach((otherBall, otherIndex) => {
          if (otherIndex === index || !otherBall) return;

          const otherRect = otherBall.getBoundingClientRect();
          const otherRadius = otherRect.width / 2;
          const dx = otherRect.left + otherRadius - (rect.left + ballRadius);
          const dy = otherRect.top + otherRadius - (rect.top + ballRadius);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < ballRadius + otherRadius) {
            velocities.current[index].x *= -1;
            velocities.current[index].y *= -1;
            velocities.current[otherIndex].x *= -1;
            velocities.current[otherIndex].y *= -1;
          }
        });

        gsap.set(ball, { x: `+=${velocity.x}`, y: `+=${velocity.y}` });

        velocities.current[index].x *= dampingFactor;
        velocities.current[index].y *= dampingFactor;
      });

      requestAnimationFrame(updatePositions);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updatePositions);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="overflow-hidden">
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      className="bg-white"
    >
      {BALLS.map((ball, index) => (
        <div
          key={ball.id}
          ref={(el) => (ballRefs.current[index] = el)}
          className="ball  absolute z-[20] md:w-[170px] md:h-[170px] w-[70px] h-[0px]"
          style={{
            position: "absolute z-[20]",
         
            borderRadius: "50%",
            top: `${Math.random() * 80}vh`,
            left: `${Math.random() * 80 + 10}vw`,
          }}
        >
          <Image src={rose} className="w-full h-full" alt="rose" />
        </div>
      ))}

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[10]">
        <h1 className="md:leading-[130px] leading-[58px] text-black text-[60px] md:text-[130px] uppercase font-condRocGrotesk">
          {" "}
          Dedicated <br />
          team
        </h1>
      </div>
    </div>
    </div>
  );
}

export default Team;
