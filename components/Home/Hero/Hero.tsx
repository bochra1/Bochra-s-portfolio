import { BaseInfo } from "@/data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Section info */}
          <div className="absolute inset-0 z-0">
          <ParticlesContainer/>

          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"    
            >
            {/* Titre et description */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.rem] lg:leading-[4rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>
             <a
              href="/cv.pdf"  // Link to the CV file in the public directory
              download="My_CV.pdf"  // Specify the filename for the download
              className="w-52 md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-z"
            >              <span>Download CV</span>
              <FaDownload />
            </a>
          </div>

          {/* Image */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-50 overflow-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
