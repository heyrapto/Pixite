"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import google from "@/public/images/semrush-certified-agency-partner-in-penrith.svg";
import james from "@/public/images/unnamed.png";
import todd from "@/public/images/unnamed(1).png";
import jimmy from "@/public/images/unnamed(2).png";
import mitch from "@/public/images/unnamed(3).png";
import matthew from "@/public/images/unnamed(4).png";
import dean from "@/public/images/unnamed(5).png";
import michael from "@/public/images/unnamed(6).png";
import lynda from "@/public/images/unnamed(7).png";
import stephan from "@/public/images/unnamed(8).png";
import anthony from "@/public/images/unnamed(9).png";
import sound from "@/public/sounds/popp.mp3";
const Testimonial = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
const [audio, setAudio] = useState(null);

useEffect(() => {
  setAudio(new Audio(sound)); // only call client
},[]);


useEffect(() => {
  const handleScroll = () => {
    if (scrollYProgress.get() > 0 && scrollYProgress.get() < 1) {
      audio.play();
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [scrollYProgress, audio]);

  const scaleTransforms = [
    useTransform(scrollYProgress, [0, 0.04, 0.08], [1, 1.2, 1]), // Starts small -> scales bigger -> back to normal
    useTransform(scrollYProgress, [0.08, 0.12, 0.16], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.16, 0.2, 0.24], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.24, 0.28, 0.32], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.32, 0.36, 0.4], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.4, 0.44, 0.48], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.48, 0.52, 0.56], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.56, 0.6, 0.64], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.64, 0.68, 0.72], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.72, 0.76, 0.8], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.8, 0.84, 0.88], [1, 1.2, 1]),
    useTransform(scrollYProgress, [0.88, 0.92, 0.96], [1, 1.2, 1]),
  ];

  // Adjust the transform ranges to be more evenly distributed

  const opacityTransforms = [
    useTransform(scrollYProgress, [0, 0.08], [0, 1]),
    useTransform(scrollYProgress, [0.08, 0.16], [0, 1]),
    useTransform(scrollYProgress, [0.16, 0.24], [0, 1]),
    useTransform(scrollYProgress, [0.24, 0.32], [0, 1]),
    useTransform(scrollYProgress, [0.32, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.48], [0, 1]),
    useTransform(scrollYProgress, [0.48, 0.56], [0, 1]),
    useTransform(scrollYProgress, [0.56, 0.64], [0, 1]),
    useTransform(scrollYProgress, [0.64, 0.72], [0, 1]),
    useTransform(scrollYProgress, [0.72, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.8, 0.88], [0, 1]),
    useTransform(scrollYProgress, [0.88, 0.96], [0, 1]),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.08], [50, 0]),
    useTransform(scrollYProgress, [0.08, 0.16], [50, 0]),
    useTransform(scrollYProgress, [0.16, 0.24], [50, 0]),
    useTransform(scrollYProgress, [0.24, 0.32], [50, 0]),
    useTransform(scrollYProgress, [0.32, 0.4], [50, 0]),
    useTransform(scrollYProgress, [0.4, 0.48], [50, 0]),
    useTransform(scrollYProgress, [0.48, 0.56], [50, 0]),
    useTransform(scrollYProgress, [0.56, 0.64], [50, 0]),
    useTransform(scrollYProgress, [0.64, 0.72], [50, 0]),
    useTransform(scrollYProgress, [0.72, 0.8], [50, 0]),
    useTransform(scrollYProgress, [0.8, 0.88], [50, 0]),
    useTransform(scrollYProgress, [0.88, 0.96], [50, 0]),
  ];

  const namePositions = [
    { top: "47%", left: "19%" },
    { bottom: "20%", right: "20%" },
    { bottom: "53%", right: "25%" },
    { top: "17%", left: "10%" },
    { bottom: "5%", left: "5%" },
    { bottom: "14%", left: "30%" },
    { bottom: "3%", left: "69%" },
    { top: "40%", left: "70%" },
    { top: "35%", left: "5%" },
    { bottom: "7%", left: "31%" },
    { bottom: "10%", left: "40%" },
    { top: "8%", right: "20%" },
  ];

  const testimonials = [
    {
      name: "James Garrett",
      company: "GreenFlow Logistics",
      bgColor: "bg-[#9E7AFF]",
      textColor: "text-[#1F0038]",
      text: "Autify helped us cut 18% of our carbon emissions across supply chains in under a year while improving efficiency and cost savings.",
      avatarInitial: "J",
      avatar: james,
    },
    {
      name: "Carlos Mendes",
      company: "EcoTrace Coffee",
      bgColor: "bg-[#5747FF]",
      textColor: "text-white",
      text: "The traceability tools are outstanding. Our customers now see exactly where their beans come from — and how we reduce impact.",
    },
    {
      name: "Sofia Rossi",
      company: "BlueEarth Textiles",
      bgColor: "bg-[#1F0038]",
      textColor: "text-white",
      text: "Switching to Autify for sustainability tracking was the best move. Their platform makes reporting simple and credible.",
      avatarInitial: "S",
      avatar: todd,
    },
    {
      name: "Jade Liu",
      text: "The team guided us through EPR compliance and carbon credits. We avoided penalties and created new revenue streams.",
      bgColor: "bg-[#B3FEB3]",
      textColor: "text-[#1F0038]",
    },
    {
      name: "Jonas Weber",
      text: "Autify went above and beyond to optimize our recycling workflows. We now hit 92% recovery rates across operations.",
      bgColor: "bg-[#9e7aff]",
      textColor: "text-[#1F0038]",
      avatarInitial: "J",
      avatar: jimmy,
    },
    {
      name: "Maya Thompson",
      text: "Working with Autify has been a game-changer. Their climate finance solutions unlocked new funding for our renewable projects.",
      bgColor: "bg-[#1F0038]",
      textColor: "text-white",
      avatarInitial: "M",
      avatar: jimmy,
    },
    {
      name: "David Chen",
      text: "Highly recommend Autify. Their vendor aggregation tool gave us visibility across 300+ suppliers with verified impact data.",
      bgColor: "bg-[#9E7AFF]",
      textColor: "text-white",
      avatarInitial: "D",
      avatar: matthew,
    },
    {
      name: "Leila Farouk",
      text: "The Autify platform simplified carbon credit verification. We’ve gained trust from investors and partners globally.",
      bgColor: "bg-[#B3FEB3]",
      textColor: "text-[#1F0038]",
      avatarInitial: "L",
      avatar: dean,
    },
    {
      name: "Hiro Tanaka",
      company: "Zenith Manufacturing",
      text: "Consistent, transparent, and forward-thinking. Autify has supported our journey toward net-zero with reliable tools.",
      bgColor: "bg-[#1F0038]",
      textColor: "text-white",
      avatarInitial: "H",
      avatar: michael,
    },
    {
      name: "Clara Jensen",
      text: "We’ve been working with Autify since 2016. Their insights helped us stay compliant and strengthen our sustainability strategy.",
      bgColor: "bg-[#5747FF]",
      textColor: "text-white",
      avatarInitial: "C",
      avatar: lynda,
    },
    {
      name: "Samuel Okoro",
      text: "Autify delivered beyond expectations. With their support, we achieved 100% packaging compliance and cut waste dramatically.",
      bgColor: "bg-[#9E7AFF]",
      textColor: "text-white",
      avatarInitial: "S",
      avatar: stephan,
    },
    {
      name: "Elena Petrova",
      text: "Outstanding results. The Autify team helped us unlock actionable insights from climate data and strengthen investor trust.",
      bgColor: "bg-[#B3FEB3]",
      textColor: "text-[#1F0038]",
      avatarInitial: "E",
      avatar: anthony,
    },
  ];
  

  return (
    <div className="carousell pt-[150px]" ref={targetRef}>
      <div className="contentContainerr relative h-[350vh]">
        {/* Centered title */}
        <div className="md:absolute md:top-[50%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-center flex items-center flex-col md:px-0 px-[3%]">
          <h1 className="md:text-[110px] text-[49px] font-bold uppercase font-condRocGrotesk md:leading-[100px] leading-[50px] md:w-[1100px]">
            Driving climate action since 2013.
          </h1>
      
          <div className="grid md:grid-cols-9 grid-cols-3 gap-4 items-center">
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>

            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
            <div className="w-[100px] h-[100px] border border-gray-300 flex justify-center items-center">
              <Image className="w-[75px] h-[75px]" src={google} alt="google" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            style={{
              opacity: opacityTransforms[i],
              y: yTransforms[i],
              scale: scaleTransforms[i],
              ...namePositions[i],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`absolute w-[373px] px-7 py-8 ${testimonial.bgColor}`}
          >
            <p
              className={`text-lg ${testimonial.textColor} font-medium text-left leading-[20px] font-lightRocGrotesk`}
            >
              {testimonial.text}
            </p>
            <div className="flex gap-3 items-center mt-4">
              {testimonial.avatarInitial && (
                <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px] font-semibold">
                  <Image src={testimonial.avatar} alt="avatar" />
                </div>
              )}
              <div className="flex flex-col text-left">
                <h5
                  className={`font-lightRocGrotesk text-[12px] leading-[12px] ${testimonial.textColor}`}
                >
                  {testimonial.name}
                </h5>
                <h5
                  className={`font-lightRocGrotesk text-[12px] leading-[12px] ${testimonial.textColor}`}
                >
                  {testimonial.company}
                </h5>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
