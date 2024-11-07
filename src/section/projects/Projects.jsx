"use client";
import React from "react";
import one from "@/public/images/2.jpg";
import two from "@/public/images/1.jpg";
import three from "@/public/images/3.jpg";
import Image from "next/image";

export default function Projects() {
  const imgs = [
    {
      src: one,
      text: "Clearly It",
      description: "Clearly IT, a trusted provider of FreePBX",
    },
    {
      src: two,
      text: "Gourmet gateaway tours",
      description: "Clearly IT, a trusted provider of FreePBX",
    },
    {
      src: three,
      text: "Glenbrook Rotary markets",
      description: "Clearly IT, a trusted provider of FreePBX",
    },
  ];

  return (
    <div className="px-[4%] my-[100px]">
      <div className="border-t-[0.5px] border-[#9d7aff7c]">
        <h5 className="font-lightRocGrotesk font-semibold mt-3 mb-8 text-white">
          Our recent projects.
        </h5>

        <div className="flex sm:flex-row flex-col gap-[50px]">
          {imgs.map((img, index) => (
            <div
              key={index}
              className="group w-full h-[413px] relative overflow-hidden font-condRocGrotesk "
              title={img.text}
            >
              <Image
                src={img.src}
                alt="logo"
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 ease-in-out"></div>
              {/* Animated Text */}
              <p className="absolute bottom-[40px] text-[24px] left-[4%] z-10  font-semibold uppercase text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-[25px]">
                {img.text}
              </p>

              <div className="absolute bottom-[40px] left-[4%] z-10 h-[30px] overflow-hidden">
                {/* Description Text */}
                <p className="font-regRocGrotesk text-[20px] text-white transform translate-y-[100%] transition-transform duration-500 ease-in-out group-hover:translate-y-[20%]">
                  {img.description}
                </p>
              </div>

              <div className="absolute bottom-0 w-full transition-all duration-500 ease-in-out transform bg-[#5747FF] h-0 group-hover:h-[120px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
