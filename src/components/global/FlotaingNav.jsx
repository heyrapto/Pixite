"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/libs/utils";
import Image from "next/image";
import logo from "@/public/images/logo.svg";


export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setNavbar(!navbar);
  const closeSidebar = () => setNavbar(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - (scrollYProgress?.getPrevious?.() || 0);

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          " w-full  backdrop-blur-[4px] bg-[#47476980] font-roc_grotesk  px-5 h-[80px] flex justify-between items-center relative z-[10000] ",
          className
        )}
      >
        <Image src={logo} width={150} height={50} alt="logo" />
        <div className="flex   gap-10 items-center">
          <ul className="xl:flex hidden gap-10 items-center text-[#fcfcfc] font-lightRocGrotesk">
            <li>Home</li>
            <li>Expertise</li>
            <li>Projects</li>
            <li>Success</li>
            <li>About</li>
          </ul>
          <button className="bg-white px-[28px] py-[10px] uppercase text-lg">
            Start a Project
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
