"use client";
import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import seo from "@/public/images/rocket-primary.svg";
import robust from "@/public/images/3.jpg";
import success from "@/public/images/pixite-x-patios-wholesale-success-story-1-800x530.jpg";
import { PiCaretDownBold } from "react-icons/pi";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

  const handleMouseEnter = (label) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setNavbar(!navbar);
  const closeSidebar = () => setNavbar(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = (current ?? 0) - (scrollYProgress.getPrevious() ?? 0);

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
          y: -120,
        }}
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className=" w-full  font-roc_grotesk  xl:px-5 xl:pt-5 left-0 fixed z-[500] flex justify-between items-center  "
      >
        <div className=" w-full  backdrop-blur-[10px] bg-[#47476980]   md:px-5 px-4 xl:h-[80px] h-[100px] flex justify-between items-center ">
          <Image src={logo} className="xl:w-[150px] w-[120px]" alt="logo" />
          <div className="flex xl:gap-[10px] gap-[24px] items-center">
            <nav className="xl:flex hidden  gap-[10px] items-center font-lightRocGrotesk">
              <NavLink
                href="/"
                label="Home"
                isActive={activeLink === "home"}
                onClick={() => setActiveLink("home")}
              />

              <button
                onMouseEnter={() => handleMouseEnter("expertise")}
                onMouseLeave={handleMouseLeave}
                className="text-white mx-[14px] flex items-center gap-4 bg-transparent py-[3px] px-3 rounded hover:bg-[#47476980] transition-colors duration-200"
              >
                Expertise
                <PiCaretDownBold className="text-[18px]" />
              </button>
              <button
                onMouseEnter={() => handleMouseEnter("projects")}
                onMouseLeave={handleMouseLeave}
                className="text-white mx-[14px] flex items-center gap-4 bg-transparent px-3 py-[2.5px] rounded hover:bg-[#47476980] transition-colors duration-200"
              >
                Projects
                <PiCaretDownBold className="text-[18px]" />
              </button>
              <button
                onMouseEnter={() => handleMouseEnter("success")}
                onMouseLeave={handleMouseLeave}
                className="text-white mx-[14px] flex items-center gap-4 bg-transparent px-3 py-[2.5px] rounded hover:bg-[#47476980] transition-colors duration-200"
              >
                Success
                <PiCaretDownBold className="text-[18px]" />
              </button>
              <button
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
                className="text-white mx-[14px] flex items-center gap-4 bg-transparent px-3 py-[2.5px] rounded hover:bg-[#47476980] transition-colors duration-200"
              >
                About
                <PiCaretDownBold className="text-[18px]" />
              </button>
            </nav>

            <button className="bg-white hover:bg-transparent hover:border-[2px] border-white hover:text-white  xl:ml-4 lg:px-[28px] px-[16px] md:py-[10px] py-3 uppercase text-xs md:text-lg font-roc_grotesk">
              Start a Project
            </button>
            <div className="xl:hidden block space-y-[3px]">
              <span className="block h-[7px] w-[30px] origin-center rounded-full bg-[#FFFFFF] transition-transform ease-in-out "></span>
              <span className="block h-[7px] w-[30px] origin-center rounded-full bg-[#FFFFFF] transition-transform ease-in-out "></span>
              <span className="block h-[7px] w-[30px] origin-center rounded-full bg-[#FFFFFF] transition-transform ease-in-out "></span>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {openDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 px-4 top-full w-full h-[473px] backdrop-blur-[10px] bg-[#47476980] z-[1000000] text-black "
            >
              {openDropdown === "expertise" && <Expertise />}
              {openDropdown === "projects" && <Projects />}
              {openDropdown === "about" && <About />}
              {openDropdown === "success" && <Success />}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

const NavLink = ({ href, isActive, label }) => {
  return (
    <a
      href={href}
      className={`text-[#fcfcfc] font-lightRocGrotesk mx-[14px] ${
        isActive ? "bg-[#47476980]" : ""
      } px-3 py-[2.5px] rounded`}
    >
      {label}
    </a>
  );
};

const Expertise = () => {
  const services = [
    {
      id: 1,
      title: "SEO",
      description: "Boost your business with award-winning services",
      image: seo,
    },
    {
      id: 2,
      title: "Web Development",
      description: "Create stunning and functional websites",
      image: seo, // Replace with actual image
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Drive traffic and sales with effective marketing strategies",
      image: seo, // Replace with actual image
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Enhance user experience with intuitive designs",
      image: seo, // Replace with actual image
    },
    {
      id: 5,
      title: "Content Creation",
      description: "Engage your audience with quality content",
      image: seo, // Replace with actual image
    },
    {
      id: 6,
      title: "Consulting",
      description: "Get expert advice tailored to your needs",
      image: seo, // Replace with actual image
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Enhance user experience with intuitive designs",
      image: seo, // Replace with actual image
    },
    {
      id: 5,
      title: "Content Creation",
      description: "Engage your audience with quality content",
      image: seo, // Replace with actual image
    },
    {
      id: 6,
      title: "Consulting",
      description: "Get expert advice tailored to your needs",
      image: seo, // Replace with actual image
    },
  ];
  return (
    <div className=" flex justify-center w-full">
      <div className="w-[1050px] text-white">
        <h5 className="font-mediumRocGrotesk uppercase text-[20px] mt-8 pb-1 border-b border-[#fcfcfc70] ">
          Services
        </h5>
        <div className="grid grid-cols-3 gap-[40px] py-6">
          {services.map((service) => (
            <div key={service.id} className="flex items-center gap-4">
              <Image
                src={service.image}
                width={50}
                height={50}
                alt={service.title}
              />
              <div className="flex flex-col">
                <h5 className="font-condRocGrotesk text-lg uppercase">
                  {service.title}
                </h5>
                <p className="font-lightRocGrotesk text-[14px] leading-[16px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full mt-7">
          <h5 className="font-lightRocGrotesk">Discover More</h5>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const services = [
    {
      id: 1,
      title: "Our Difference",
      description: "Boost your business with award-winning services",
      image: seo,
    },
    {
      id: 2,
      title: "Meet the team",
      description: "Create stunning and functional websites",
      image: seo, // Replace with actual image
    },
    {
      id: 3,
      title: "Careers",
      description:
        "Drive traffic and sales with effective marketing strategies",
      image: seo, // Replace with actual image
    },
    {
      id: 4,
      title: "Reviews",
      description: "Enhance user experience with intuitive designs",
      image: seo, // Replace with actual image
    },
    {
      id: 5,
      title: "Contact",
      description: "Engage your audience with quality content",
      image: seo, // Replace with actual image
    },
    {
      id: 6,
      title: "Blog",
      description: "Get expert advice tailored to your needs",
      image: seo, // Replace with actual image
    },
  ];
  return (
    <div className=" flex justify-center w-full">
      <div className="w-[1050px] text-white">
        <h5 className="font-mediumRocGrotesk uppercase text-[20px] mt-8 pb-1 border-b border-[#fcfcfc70] ">
          Get to know us
        </h5>
        <div className="grid grid-cols-3 gap-[40px] py-20">
          {services.map((service) => (
            <div key={service.id} className="flex items-center gap-4">
              <Image
                src={service.image}
                width={50}
                height={50}
                alt={service.title}
              />
              <div className="flex flex-col">
                <h5 className="font-condRocGrotesk text-lg uppercase">
                  {service.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Success = () => {
  const services = [
    {
      id: 1,
      title: "Our Difference",
      description: "Boost your business with award-winning services",
      image: seo,
    },
    {
      id: 2,
      title: "Meet the team",
      description: "Create stunning and functional websites",
      image: seo, // Replace with actual image
    },
    {
      id: 3,
      title: "Careers",
      description:
        "Drive traffic and sales with effective marketing strategies",
      image: seo, // Replace with actual image
    },
    {
      id: 4,
      title: "Reviews",
      description: "Enhance user experience with intuitive designs",
      image: seo, // Replace with actual image
    },
    {
      id: 5,
      title: "Contact",
      description: "Engage your audience with quality content",
      image: seo, // Replace with actual image
    },
    {
      id: 6,
      title: "Blog",
      description: "Get expert advice tailored to your needs",
      image: seo, // Replace with actual image
    },
  ];
  return (
    <div className=" flex justify-center w-full">
      <div className="w-[1050px] text-white">
        <div className="grid grid-cols-3 gap-[40px] py-5">
          <div className="col-span-2 w-full h-[400px]">
            <Image
              className="w-full h-full object-cover"
              src={success}
              alt="success"
            />
          </div>
          <div className="col-span-1">
            <h5 className="font-mediumRocGrotesk uppercase text-[20px] mt-8 pb-1 border-b border-[#fcfcfc70] ">
              from the vault
            </h5>
            <div className=" flex flex-col pt-[30px]">
              <h5 className="font-condRocGrotesk uppercase text-[20px] leading-[22px]">
                Stepping up success: Our footerar <br /> Store story
              </h5>
              <p className="font-lightRocGrotesk text-sm leading-[13px] mt-1">
                In a competitive footwear market, made <br /> even more
                challenging by ...
              </p>
            </div>
            <div className=" flex flex-col pt-[60px]">
              <h5 className="font-condRocGrotesk uppercase text-[20px] leading-[22px]">
                Elevating success: Te velocity home <br /> Lifts story
              </h5>
              <p className="font-lightRocGrotesk text-sm leading-[13px] mt-1">
                In a competitive footwear market, made <br /> even more
                challenging by ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const services = [
    {
      id: 1,
      title: "Crafting A Robust digital presence fo...",
      description: "Boost your business with award-winning services",
      image: robust,
    },
    {
      id: 2,
      title: "Creating a premium chef-led tour",
      description: "Create stunning and functional websites",
      image: robust, // Replace with actual image
    },
    {
      id: 3,
      title: "Elevating a non-profit's digital...",
      description:
        "Drive traffic and sales with effective marketing strategies",
      image: robust, // Replace with actual image
    },
    {
      id: 4,
      title: "Transforming a traditional antique",
      description: "Enhance user experience with intuitive designs",
      image: robust, // Replace with actual image
    },
  ];
  return (
    <div className=" flex justify-center w-full">
      <div className="w-[1300px] text-white">
        <div className="grid grid-cols-4 gap-[60px] py-6">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col w-[100%] pt-5  ">
              <h5 className=" text-lg uppercase truncate font-mediumRocGrotesk text-[18px] border-b border-[#fcfcfc70] leading-[24px]  mb-5">
                {service.title}
              </h5>

              <Image
                className="w-full"
                src={service.image}
                height={254}
                alt={service.title}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full mt-5">
          <h5 className="font-lightRocGrotesk">Discover More</h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
