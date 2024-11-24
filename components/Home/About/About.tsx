import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import { aboutInfo, workData } from '@/data/data';
import { FaBriefcase, FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="  pt-16 pb-16 bg-[#050709]">
      <div>
        <SectionHeading>About Me</SectionHeading>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-20"
        >
          {/* About Me Text Section */}
          <div>
            <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
              {aboutInfo.title}
            </h1>
            <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
            <div className="mt-8">
              {/* Skills List */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-blue-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm s:text-base md:text-lg font-bold text-gray-300">Frontend Development</p>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-green-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm s:text-base md:text-lg font-bold text-gray-300">Backend Development</p>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-orange-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm s:text-base md:text-lg font-bold text-gray-300">Full Stack Development</p>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 className="text-bg text-[26px] sm:text-1xl md:text-22xl lg:text-3xl font-bold text-gray-200">Work Experience</h2>
            <div className="space-y-8">
              {workData.map((work, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="w-10 h-10  p-2 bg-blue-800 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-white text-lg" />
                  </div>
                  {/* Text */}
                  <div>
                    <p className="text-white font-bold text-lg">{work.company}</p>
                    <p className="text-gray-400 text-sm italic">{work.position}</p>
                    <p className="text-gray-400 text-sm italic">{work.mission}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
