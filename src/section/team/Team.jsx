"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import rose from "@/public/images/Rose.png";

const BALLS = Array.from({ length: 7 }).map((_, i) => ({ id: i }));

function Team() {
  const ballRefs = useRef([]);
  const containerRef = useRef(null);

  const positions = useRef([]);
  const velocities = useRef([]);
  const dampingFactor = 0.98;
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const containerBounds = container.getBoundingClientRect();

    // Initialize positions and velocities
    positions.current = BALLS.map(() => ({
      x: Math.random() * (containerBounds.width * 0.8),
      y: Math.random() * (containerBounds.height * 0.8),
    }));

    velocities.current = BALLS.map(() => ({
      x: Math.random() * 8 - 4,
      y: Math.random() * 8 - 4,
    }));

    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - previousMousePosition.current.x;
      const deltaY = mouseY - previousMousePosition.current.y;
      previousMousePosition.current = { x: mouseX, y: mouseY };

      positions.current.forEach((pos, index) => {
        const ball = ballRefs.current[index];
        if (!ball) return;

        const rect = ball.getBoundingClientRect();
        const ballRadius = rect.width / 2;

        const dx = mouseX - (pos.x + ballRadius);
        const dy = mouseY - (pos.y + ballRadius);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < rect.width) {
          velocities.current[index].x += deltaX * 0.5;
          velocities.current[index].y += deltaY * 0.5;
        }
      });
    };

    const updatePositions = () => {
      BALLS.forEach((_, index) => {
        const ball = ballRefs.current[index];
        if (!ball) return;

        const velocity = velocities.current[index];
        const pos = positions.current[index];
        const rect = ball.getBoundingClientRect();
        const ballRadius = rect.width / 2;

        // Update position
        pos.x += velocity.x;
        pos.y += velocity.y;

        // Bounce off container edges
        if (pos.x <= 0 || pos.x + rect.width >= containerBounds.width) {
          velocity.x *= -1;
          pos.x = Math.max(0, Math.min(containerBounds.width - rect.width, pos.x));
        }
        if (pos.y <= 0 || pos.y + rect.height >= containerBounds.height) {
          velocity.y *= -1;
          pos.y = Math.max(0, Math.min(containerBounds.height - rect.height, pos.y));
        }

        // Collisions with other balls
        BALLS.forEach((_, otherIndex) => {
          if (otherIndex === index) return;
          const otherBall = ballRefs.current[otherIndex];
          if (!otherBall) return;

          const otherRect = otherBall.getBoundingClientRect();
          const otherRadius = otherRect.width / 2;

          const dx =
            positions.current[otherIndex].x + otherRadius - (pos.x + ballRadius);
          const dy =
            positions.current[otherIndex].y + otherRadius - (pos.y + ballRadius);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < ballRadius + otherRadius) {
            const angle = Math.atan2(dy, dx);
            const overlap = ballRadius + otherRadius - distance;

            // Push apart
            pos.x -= Math.cos(angle) * overlap / 2;
            pos.y -= Math.sin(angle) * overlap / 2;
            positions.current[otherIndex].x += Math.cos(angle) * overlap / 2;
            positions.current[otherIndex].y += Math.sin(angle) * overlap / 2;

            // Swap velocities
            const temp = { ...velocity };
            velocities.current[index] = velocities.current[otherIndex];
            velocities.current[otherIndex] = temp;
          }
        });

        // Apply via GSAP
        gsap.set(ball, { x: pos.x, y: pos.y });

        // Apply damping
        velocity.x *= dampingFactor;
        velocity.y *= dampingFactor;
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
            className="ball absolute z-[20] md:w-[170px] md:h-[170px] w-[70px] h-[70px]"
            style={{
              borderRadius: "50%",
            }}
          >
            <Image src={rose} className="w-full h-full" alt="rose" />
          </div>
        ))}

        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[10]">
          <h1 className="md:leading-[130px] leading-[58px] text-black text-[60px] md:text-[130px] uppercase font-condRocGrotesk">
            Dedicated <br />
            team
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
