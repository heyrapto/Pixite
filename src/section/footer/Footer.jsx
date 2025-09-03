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
        "Solutions",
        "Case Studies",
        "Impact Stories",
        "Our Approach",
        "Our Team",
        "Careers",
        "Contact Us",
        "Insights",
      ],
    },
    {
      title: "Our Work",
      items: [
        "Tracing Sustainable Coffee Supply Chains",
        "Building a Closed-Loop Recycling System",
        "Empowering Ethical Fashion Transparency",
        "Tracking Emissions for Global Logistics",
        "Automating EPR Compliance for Plastics",
        "Verifying Fair Labor in Agriculture",
        "Enabling Low-Carbon Cross-Border Payments",
        "Digitizing Vendor Sustainability Data",
        "Financing Climate-Smart Trade Projects",
        "Circular Economy Tracking for Electronics",
      ],
    },
    {
      title: "Impact Stories",
      items: [
        "Carbon Credits Verified with Transparency",
        "Circular Economy Driving Business Growth",
        "Supply Chain Traceability at Scale",
      ],
    },
    {
      title: "Latest Article",
      items: [
        "Why Supply Chain Transparency is Non-Negotiable",
        "The Future of Carbon Credits in Global Trade",
        "How Blockchain Enables Circular Economies",
        "From Offsets to Real Impact: What Matters",
        "EPR Compliance: Turning Burden into Benefit",
      ],
    },
  ],
};

const categoryData = [
  {
    items: [
      "Supply Chain Traceability",
      "Sustainability Tracking",
      "Recycling & Circular Economy",
    ],
  },
  {
    items: ["EPR & Carbon Credits", "B2B Climate Payments", "Climate Finance"],
  },
  {
    items: ["Vendor Aggregation", "Impact Verification", "Transparency Tools"],
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
            Enabling climate accountability and <br /> sustainable growth since
            2013.
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
            Autify Network acknowledges that we live, work, and build solutions
            on lands that carry deep histories of stewardship. We honor and
            respect those who care for the Earth — past, present, and future.
          </p>
          <div className="py-3">
            <p className="text-center text-sm text-white font-lightRocGrotesk ">
              2C/21 Lawson St, Penrith NSW 2750
            </p>
            <p className="text-center text-sm text-white font-lightRocGrotesk ">
              © 2024 Autify Network. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center gap-5 items-center text-[11px] flex-row text-white font-lightRocGrotesk ">
            <p>Terms of Service</p>
            <p>Disclaimer</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
