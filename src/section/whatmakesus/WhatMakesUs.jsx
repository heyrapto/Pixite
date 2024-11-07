import React from "react";
import Image from "next/image";
import track from "@/public/images/Business-Product-Report-Present-Grahp-Streamline-Pixel-1.svg";

const data = [
  {
    id: 1,
    title: "Proven track record",
    description:
      "Skip the rookies and ride with the pros. We've got a treasure trove of victories under our belt, each one a stepping stone to your business growth. Let's add your win to our highlight reel.",
    imageSrc: track,
    bgColor: "#5747FF",
  },
  {
    id: 2,
    title: "Proven track record",
    description:
      "Skip the rookies and ride with the pros. We've got a treasure trove of victories under our belt, each one a stepping stone to your business growth. Let's add your win to our highlight reel.",
    imageSrc: track,
    bgColor: "#5747FF",
  },
  {
    id: 3,
    title: "Proven track record",
    description:
      "Skip the rookies and ride with the pros. We've got a treasure trove of victories under our belt, each one a stepping stone to your business growth. Let's add your win to our highlight reel.",
    imageSrc: track,
    bgColor: "#5747FF",
  },
  {
    id: 4,
    title: "Proven track record",
    description:
      "Skip the rookies and ride with the pros. We've got a treasure trove of victories under our belt, each one a stepping stone to your business growth. Let's add your win to our highlight reel.",
    imageSrc: track,
    bgColor: "#5747FF",
  },
  {
    id: 5,
    title: "Proven track record",
    description:
      "Skip the rookies and ride with the pros. We've got a treasure trove of victories under our belt, each one a stepping stone to your business growth. Let's add your win to our highlight reel.",
    imageSrc: track,
    bgColor: "#5747FF",
  },
  {
    id: 6,
    title: "Proven track record",
    description:
      "Skip the rookies and ride with the pros. We've got a treasure trove of victories under our belt, each one a stepping stone to your business growth. Let's add your win to our highlight reel.",
    imageSrc: track,
    bgColor: "#5747FF",
  },
];

export default function WhatMakesUs() {
  return (
    <div className="px-[4%] pt-[120px]">
      <div className="border-t-[0.5px] border-[#9d7aff7c] mb-24">
        <h5 className="font-lightRocGrotesk font-semibold mt-4 mb-20 text-white">
          What Makes Us Special Our Mums Say We&apos;re Cool.
        </h5>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[70px] gap-[50px]">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full md:h-[540px] h-[375px] flex md:justify-center justify-between md:py-0 py-[45px] items-center flex-col md:gap-10 bg-[#5747FF] px-10"
            >
              <div className="flex justify-center">
                <Image src={item.imageSrc} alt={item.title} />
              </div>
              <h3 className="font-condRocGrotesk uppercase text-white text-[42px] md:text-[60px] leading-[40px] md:leading-[60px] text-center">
                {item.title}
              </h3>
              <p className="font-lightRocGrotesk text-white font-semibold text-center md:leading-normal leading-[20px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
