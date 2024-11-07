import React from "react";
import grow from "@/public/images/bolt-white.svg";
import Image from "next/image";
export default function CtaFooter() {
  return (
    <div>
      <div className="relative overflow-hidden w-full h-[70vh] bg-[#DCFF7A]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 ">
          <Image
            src={grow}
            alt="Centered Background"
            width={300}
           
            priority
          />
        </div>
        <div className="absolute w-full  h-full flex flex-col items-center justify-center z-20">
          <h1 className="font-condRocGrotesk md:text-[100px] text-[42px]  uppercase mb-5">
            Lets Grow Together
          </h1>
          <p className="font-lightRocGrotesk md:w-[768px] text-center md:text-[24px] text-[19px] font-semibold md:px-0 px-5">
            Its time we talked. We;re not just another digital marketing agency
            – were your growth partners, your success allies, and occasionally,
            your biggest cheerleaders.
          </p>
          <div className="md:px-0 px-5 md:w-auto  w-full">
            <button className="bg-[#8C00FF] w-full mt-5 font-roc_grotesk text-white px-[29px] py-[12px] uppercase text-lg">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
