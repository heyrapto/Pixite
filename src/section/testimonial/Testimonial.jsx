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
import { PiMicrophoneThin } from "react-icons/pi";
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
      company: "Velocity Home Lifts",
      bgColor: "bg-[#9E7AFF]",
      textColor: "text-[#1F0038]",
      text: "Liam and Pixite helped us turn a 3.2 million dollar business into a 4.5 million dollar business in less than 12 months.",
      avatarInitial: "J",
      avatar: james,
    },
    {
      name: "Graeme Beveridge",
      company: "Penrith Serviced Offices",
      bgColor: "bg-[#5747FF]",
      textColor: "text-white",
      text: "Great job Liam and Bec. Our new website looks great and dealing with you both has been a joy. Highly recommend to anyone looking for a...",
    },
    {
      name: "Todd Griffin",
      company: "TG Psychology",
      bgColor: "bg-[#1F0038]",
      textColor: "text-white",
      text: "I have only recently switched to Pixite for my digital marketing needs, but so far my experiences have been all positive.",
      avatarInitial: "T",
      avatar: todd,
    },
    {
      name: "Jade",
      text: "Liam and the team at Pixite have helped me greatly with my Facebook ads and marketing. They were very knowledgeable and",
      bgColor: "bg-[#B3FEB3]",
      textColor: "text-[#1F0038]",
    },
    {
      name: "Jimmy Le",
      text: "Pixite team always goes the extra mile, they sorted out all the bugs present from our business website and optimized the SEO perfectly",
      bgColor: "bg-[#9e7aff]",
      textColor: "text-[#1F0038]",
      avatarInitial: "J",
      avatar: jimmy,
    },
    {
      name: "Mitch Bevan",
      text: "Working with Liam and the team at Pixite has been an absolute game-changer for our business. Our partnership has brought...",
      bgColor: "bg-[#1F0038]",
      textColor: "text-white",
      avatarInitial: "M",
      avatar: mitch,
    },
    {
      name: "Matthew Barton",
      text: "Highly recommend Pixite. Extremely thorough and client focused that deliver amazing results. Thanks to Liam our business has grown...",
      bgColor: "bg-[#9E7AFF]",
      textColor: "text-white",
      avatarInitial: "M",
      avatar: matthew,
    },
    {
      name: "Dean Gresser",
      text: "The guys at Pixite are brilliant. They were able to source an affordable and user friendly learning management software to meet our...",
      bgColor: "bg-[#B3FEB3]",
      textColor: "text-[#1F0038]",
      avatarInitial: "D",
      avatar: dean,
    },
    {
      name: "Michael Todd",
      company: "OnePointHealth",
      text: "A consistent and progressive online marketing agency which we have worked with for many years to support our website, SEO and...",
      bgColor: "bg-[#1F0038]",
      textColor: "text-white",
      avatarInitial: "M",
      avatar: michael,
    },
    {
      name: "Lynda Collier",
      text: "We have been working with Liam and Bec from Pixite since mid 2015, during this time we have received professional, timely, and wise...",
      bgColor: "bg-[#5747FF]",
      textColor: "text-white",
      avatarInitial: "L",
      avatar: lynda,
    },
    {
      name: "Stephan Kovacic",
      text: "I can't thank Liam and Bec enough for their amazing work. They were able to achieve more than I was hoping for with my new website an...",
      bgColor: "bg-[#9E7AFF]",
      textColor: "text-white",
      avatarInitial: "S",
      avatar: stephan,
    },
    {
      name: "Anthony Wang",
      text: "Outstanding service and results. Liam and the team have helped us achieve remarkable growth through their digital marketing expertise.",
      bgColor: "bg-[#B3FEB3]",
      textColor: "text-[#1F0038]",
      avatarInitial: "A",
      avatar: anthony,
    },
  ];

  return (
    <div className="carousell pt-[150px]" ref={targetRef}>
      <div className="contentContainerr relative h-[350vh]">
        {/* Centered title */}
        <div className="md:absolute md:top-[50%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-center flex items-center flex-col md:px-0 px-[3%]">
          <h1 className="md:text-[110px] text-[49px] font-bold uppercase font-condRocGrotesk md:leading-[100px] leading-[50px] md:w-[1100px]">
            Pixite has enabled businesses to grow and thrive online since 2013.
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
