"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Banner() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Define scroll transforms with staggered ranges for each text block
  const xFirst = useTransform(scrollYProgress, [0.7, 0.9], ["0%", "100%"]);
  const xSecond = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "-100%"]);
  const xThird = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);

  return (
    <div className="carousel overflow-hidden" ref={targetRef}>
      <div className="contentContainer font-condRocGrotesk text-[#1F003F]">
        {/* First text moving from right to left */}
        <div className="bg-[#DCFF7A] h-[130px] w-full flex items-center -skew-y-1">
          <motion.div
            style={{ x: xFirst }}
            className="textItems font-condRocGrotesk flex items-center"
          >
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
          </motion.div>
        </div>

        {/* Second text moving from right to left */}
        <div className="bg-[#5747FF] h-[130px] w-full flex items-center">
          <motion.div style={{ x: xSecond }} className="textItems">
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
          </motion.div>
        </div>

        {/* Third text moving from right to left */}
        <div className="bg-[#0DFD0D] h-[130px] w-full flex items-center -skew-y-1">
          <motion.div style={{ x: xThird }} className="textItems">
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
            <div className="text-[93px] uppercase">Growing Businesses</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
 
