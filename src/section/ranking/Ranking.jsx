
"use client";
import { use, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Ranking() {
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.to(gsap.utils.toArray(".grid-item__left"), {
      x: "-120%",
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        // markers: {
        //   startColor: "transparent",
        //   endColor: "transparent",
        // },
        trigger: gridRef.current,
        start: "top 60%",
        end: "bottom 91%",
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(gsap.utils.toArray(".grid-item__right"), {
      x: "120%",
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        // markers: {
        //   startColor: "transparent",
        //   endColor: "transparent",

        //   indent: 20,
        // },
        trigger: gridRef.current,
        start: "top 60%",
        end: "bottom 91%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Background Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0DFD0D] text-white z-0 md:px-0 px-5">
        <h1 className="font-condRocGrotesk xl:text-[127px] text-[58px] text-center uppercase text-[#1F0038] md:leading-[120px] leading-[52px] mb-3">
        Say Hello To <br /> Ranking First
      </h1>

      <p className="font-regRocGrotesk text-[#1F0038] md:text-[34px] text-[24px] text-center md:w-[1000px] md:mt-1 -mt-2">
        Pixite delivers powerful SEO and Google Ads campaigns, we also create
        nimble high-converting websites that turn visitors into customer
        experiences.
      </p>
        </div>

        {/* Grid Overlay */}
        <div
          ref={gridRef}
          className="absolute inset-0 grid grid-cols-2 grid-rows-8 z-10"
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              className={
                "bg-[#9E7AFF] w-full h-full " +
                ((index + 1) % 2 === 0 ? "grid-item__right" : "grid-item__left")
              }
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
