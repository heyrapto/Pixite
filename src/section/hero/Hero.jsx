"use client";
import { FloatingNav } from "@/components/global/FlotaingNav";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import awa from "../../public/images/AWA_Finalist_2024_white.svg";
import apac from "../../public/images/apac-logo-light.svg";
import awia from "../../public/images/awia-white.svg";
import best from "../../public/images/best-innovation-white.png";
import { FaStar } from "react-icons/fa";
import Navbar from "@/components/Dropdown";

const AnimatedContent = ({ isVisible, children }) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out  w-full 
        ${isVisible ? "opacity-100 " : "opacity-0 "}`}
    >
      {children}
    </div>
  );
};

export default function Hero() {
  const [visible, setVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-[115vh] bg-[#1F0038]">
      <Navbar />
      {/* <div className="absolute top-0 left-[0] w-full h-full z-10 flex justify-center items-center ">
        <Spline
          className="w-full h-full"
          scene="https://raw.githubusercontent.com/six-shot/spline/main/no-logo%20(copy).spline"
        />
      </div> */}
      <div className="absolute w-full h-[100vh] lg:mt-[90px] mb-[110px]  mt-[200px] flex flex-col items-center justify-center text-center z-20 xl:px-0 px-5">
        <h1 className="font-condRocGrotesk md:text-[31px] text-[24px] xl:w-full w-[375px] px-12 text-white uppercase xl:mb-5 mb-7 md:leading-normal leading-[28px]">
          Climate Tech. Verified. Onchain
        </h1>
        <h1 className="font-condRocGrotesk xl:text-[127px] text-[58px] text-center uppercase text-white md:leading-[95px] leading-[55px] mb-3">
          Climate Tech <br /> is Decentralized
        </h1>

        <p className="font-regRocGrotesk bg-[#5747FF] xl:text-[24px] text-[19px] md:leading-normal leading-[22px] md:-skew-y-[2deg] -skew-y-[1deg] text-white xl:px-4 px-7 md:py-0 py-1">
          Look no further. Were the sustainability allies you&apos;ve been searching
          for.
        </p>

        <div className="flex md:flex-row flex-col-reverse md:gap-3 gap-4 xl:items-center md:w-auto w-full font-extRocGrotesk xl:mt-7 mt-[100px]">
          <button className="backdrop-blur-[1px] bg-white/10 text-lg uppercase md:py-[10px] py-2 px-[27px] text-white border-[2px] border-white">
            Climate Credits
          </button>
          <button className="bg-[#0DFD0D] text-lg uppercase md:py-[12px] py-2 px-[27px]">
          Solura Verified
          </button>
        </div>

        <div className="w-[320px] md:flex hidden justify-end gap-3 items-center mt-4">
          <div className="w-[10px] h-[10px] bg-[#0DFD0D] blink" />
          <h6 className="font-regRocGrotesk text-white text-lg">
            Available now
          </h6>
        </div>

        <div className="md:mt-14 mt-28 h-[200px] relative">
          <AnimatedContent isVisible={visible}>
            <div className="flex flex-col items-center w-full gap-3">
              <div className="flex items-center gap-3">
                <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] backdrop-blur-[1px] bg-white/10 flex justify-center items-center">
                  <Image src={awa} alt="awa" className="w-[80%]" />
                </div>
                <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] backdrop-blur-[1px] bg-white/10 flex justify-center items-center">
                  <Image src={apac} alt="awa" className="w-[80%]" />
                </div>
                <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] backdrop-blur-[1px] bg-white/10 flex justify-center items-center">
                  <Image src={awia} alt="awa" className="w-[80%]" />
                </div>
                <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] backdrop-blur-[1px] bg-white/10 flex justify-center items-center">
                  <Image src={best} alt="awa" className="w-[80%]" />
                </div>
              </div>
              <p className="text-white w-full text-center md:text-lg text-base font-regRocGrotesk backdrop-blur-[1px] bg-white/10 px-4 py-[2px]">
                Recognised Industry Wide
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent isVisible={!visible}>
            <div className="absolute top-0 flex justify-center flex-col items-center w-full">
              <div className="text-white text-[34px] backdrop-blur-[1px] px-8 py-3 flex gap-1 items-center bg-white/10">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-white text-center text-base md:text-lg font-regRocGrotesk mt-2.5">
                Rated 5 Stars on Google
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
