import React from "react";
import footerlogo from "@/public/images/footerlogo.svg";
import instagram from "@/public/images/instagram-primary.svg";
import Image from "next/image";

const data = {
  sections: [
    {
      title: "Explore",
      items: [
        "Home",
        "Expertise",
        "Past Work",
        "Success Stories",
        "Our Difference",
        "Our Team",
        "Careers",
        "Contact Us",
        "Blog",
      ],
    },
    {
      title: "Our Work",
      items: [
        "Crafting a Robust Digital Presence for ...",
        "Creating a Premium Chef-Led Tour...",
        "Elevating a Non-Profit's Digital Presence",
        "Transforming a Traditional Antique...",
        "Launching a Pharmacist-Focused Digit...",
        "Empowering a Community-Driven...",
        "Elevating The Velocity Home Lifts...",
        "A Refresh for Penrith Serviced Offices",
        "Launching a Footwear E-commerce...",
        "A High-Converting Landing Page for...",
      ],
    },
    {
      title: "Success Stories",
      items: [
        "Custom eCommerce Solution Drives...",
        "Stepping Up Success: Our Footwear...",
        "Elevating Success: The Velocity Home...",
      ],
    },
    {
      title: "Latest Article",
      items: [
        "Why InHouse Expertise Beats White-..",
        "Understanding the impact of Web Vita...",
        "The Magic of Micro-Interactions: Why...",
        "Tracking Conversion:The Old vs The...",
        "Why Elementor is Not a professsional...",
      ],
    },
  ],
};

const categoryData = [
  {
    items: [
      "SEO",
      "Facebook & Instagram Ads",
      "Email Marketing",
    ],
  },
  {
    items: ["Web Design", "Digital Marketing", "Socail Media Marketing"],
  },
  {
    items: ["Google Ads", "Branding", "Printing Design"],
  },
];

export default function Footer() {
  return (
    <div className="px-[4%] py-[6%]">
      <div className="flex justify-between md:flex-row flex-col md:items-center pb-20 border-b border-[#452460]">
        <Image
          src={footerlogo}
          className="md:w-[241px] w-[150px]"
          alt="footerlogo"
        />

        <div className="flex flex-col md:items-end ">
          <h4 className="font-lightRocGrotesk text-white md:text-[24px] text-[19px] md:text-right  md:mt-0 mt-5  leading-[25px]">
            Enabling businesses to grow and thrive <br /> online since 2013.
          </h4>
          <div className="flex gap-4 items-center md:mt-[10px] mt-6">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white"
                >
                  <Image src={instagram} alt="instagram" />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-[10px] gap-20 py-16">
        {data.sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-[#8E7E9A] md:text-[24px] text-[19px] font-roc_grotesk pb-4">
              {section.title}
            </h4>
            <div className="flex flex-col gap-2">
              {section.items.map((item, itemIndex) => (
                <h5
                  key={itemIndex}
                  className="font-lightRocGrotesk text-[#fcfcfc] md:text-[18px] text-base font-semibold"
                >
                  {item}
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" border-t border-[#452460] pt-10">
        <h5 className="text-[#8E7E9A] md:text-[24px] text-[19px] font-roc_grotesk pb-6">
          Expertise
        </h5>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {categoryData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex flex-col gap-5">
                {section.items.map((item, itemIndex) => (
                  <h5
                    key={itemIndex}
                    className="font-lightRocGrotesk text-[#fcfcfc] md:text-[18px] text-base font-semibold"
                  >
                    {item}
                  </h5>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:pt-[200px] pt-[100px] flex md:flex-col flex-col justify-center items-center text-center md:px-0 px-6 ">
        <div className="md:w-[512px]">
          <p className="text-center text-sm text-white font-lightRocGrotesk ">
            Pixite acknowledges that we live, work, and create on the unceded
            land of the Gundungurra and Darug people. Always was, always will
            be.
          </p>
          <div className="py-3">
            <p className="text-center text-sm text-white font-lightRocGrotesk ">
              {" "}
              2C/21 Lawson St, Penrith NSW 2750
            </p>
            <p className="text-center text-sm text-white font-lightRocGrotesk ">
              © 2024 Pixite Pty Ltd. All right reserved.
            </p>
          </div>
          <div className="flex justify-center  gap-5 items-center text-[11px] flex-row  text-white font-lightRocGrotesk ">
            <p>Terms of Service</p>
            <p>Disclaimer</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
