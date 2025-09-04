"use client";

import React from "react";
import seo from "@/public/images/Business-Product-Report-Present-Grahp-Streamline-Pixel-1.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "SUPPLY CHAIN TRACEABILITY",
    description:
      "Solura Network’s API brings blockchain- and AI-powered supply chain traceability into your systems. Track and share product origin, movement, and ownership with real-time, tamper-proof data.",
  },
  {
    name: "TRACT & TRACE SUSTAINABILITY TRACEABILITY",
    description:
      "Our Sustainability Traceability API tracks and documents the environmental and social impact of products across the supply chain. It standardizes data on emissions, water use, labor standards, and more for a complete view of sustainability metrics.",
  },
  {
    name: "RECYCLING & CIRCULAR ECONOMY",
    description:
      "Enable closed-loop recycling by tracking materials from use to reuse with Solura's tamper-proof API.",
  },
  {
    name: "EPR & CARBON CREDIT MGMT",
    description:
      "Automate EPR compliance and carbon credit tracking with one API—covering plastics, tyres, electronics, and emissions.",
  },
  {
    name: "VENDOR AGGREGATOR PLATFORM",
    description:
      "Companies can easily discover, evaluate, and collaborate with vendors, expanding their global reach while maintaining quality and compliance.",
  },
  {
    name: "B2B CROSS BORDER PAYMENTS",
    description:
      "Solura Network powers real-time, low-cost, cross-border B2B payments with secure blockchain technology.",
  },
  {
    name: "TRADE FINANCE",
    description:
      "Our platform brings transparency and automation to trade finance, making it easier for businesses to access funding and manage risk. ",
  },
  // {
  //   name: "SOCIAL MEDIA MARKETING",
  //   description:
  //     "Your website isn't going to go anyhwere if no one can find it. We enable businesses to grow their search presence online. SEO is the best way to empoer trust from potential customers and drive leads and online sales.",
  // },
  // {
  //   name: "PRINTING & DESIGNS",
  //   description: "High-quality printing services for all needs.",
  // },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
    },
  },
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

export default function Categories() {
  return (
    <div className="w-full bg-[#9e7aff] py-[100px] px-[4%] overflow-hidden">
      <div>
        <h6 className="font-lightRocGrotesk text-white text-lg">
          Growing businesses with powerful digital marketing.
        </h6>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
         whileInView="show"
        viewport={{ once: false, amount: 0.2}}
        className="mt-[30px] flex xl:gap-0 gap-6 flex-col"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex relative box-container cursor-pointer group md:hover:h-[170px] md:h-auto h-[340px]"
          >
            {/* Image wrapped in a div for hover effect */}
            <div className="md:block absolute z-[1000] left-4 top-4 opacity-0 transform scale-[0.0001] group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1200ms] ease-out origin-top-left">
              <Image
                src={seo}
                alt={`${category.name} icon`}
                className="w-[67px] h-[67px]"
              />
            </div>
            <div className="md:hidden h-full w-full flex flex-col justify-between bg-[#1F0038] absolute left-0 text-white font-condRocGrotesk text-[60px] z-[10] px-[4%] py-[6%] transition-all duration-700 ease-in-out">
              <Image
                src={seo}
                alt={`${category.name} icon`}
                className="w-[67px] h-[67px]"
              />
              <h4 className="text-[45px] leading-[45px]">{toTitleCase(category.name)}</h4>
              <p className="text-white text-base font-semibold leading-[20px] font-lightRocGrotesk">
                {category.description}
              </p>
            </div>
            <h4 className="md:block hidden absolute left-0 group-hover:left-12 text-white font-condRocGrotesk text-[60px] z-[10] px-[3%] mb-5 transition-all duration-700 ease-in-out">
              {category.name}
            </h4>
            <div className="md:block hidden absolute inset-0 bg-[#1F0038] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
            <div className="box md:group-hover:bg-[#1F0038] duration-100 transform group-hover:translate-y-[-10px] transition-transform"></div>
            <p className="md:block hidden absolute group-hover:left-12 left-0 bottom-[20px] w-[800px] text-white text-lg font-semibold leading-[20px] transform translate-y-[20px] font-lightRocGrotesk px-[3%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform transition-opacity ease-in-out duration-500">
              {category.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-10">
        <button className="bg-white px-[28px] py-[10px] uppercase text-lg font-roc_grotesk">
          more about our services
        </button>
      </div>
    </div>
  );
}
