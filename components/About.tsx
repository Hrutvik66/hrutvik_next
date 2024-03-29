import Image from "next/image";
import React from "react";
import { CornerDownRight } from "react-feather";

const About = () => {
  return (
    <div
      className="lg:p-[5rem_5rem_5rem_9rem] p-[3.5rem_1rem_3.5rem] font-Inter"
      id="About"
    >
      <div className="flex items-center text-[#ccd6f6]">
        <h1 className="font-bold text-[2rem]">About Me</h1>
        <hr className="flex-1 h-1px ml-[1rem] border-solid bg-[#ccd6f6] outline-none" />
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center pt-[2rem] text-white font-Fira">
        <div className="flex-1 text-[#8892b0] text-[1rem] leading-[26px]">
          <p className="flex md:text-[1.1rem] text-justify">
            Hello! My name is Hrutvik and I am a Developer. I like to learn
            things related to Development. <br />
            <br />I started learning HTML and CSS first and now I am MERN
            Developer. Because of Development Enthusiasm now I am Learning
            Flutter Application Development. My main focus these days is
            learning new things related to Website and Application Development.{" "}
            <br />
            <br />
            Here are a few technologies I know About:
          </p>
          <div className="flex mt-[1rem]">
            <div className="leading-10 flex-1">
              <div className="flex items-center space-x-2">
                <CornerDownRight className="mb-[0.6rem] text-[#64FFDA]"/>
                <p>Nextjs</p>
              </div>
              <div className="flex items-center space-x-2">
                <CornerDownRight className="mb-[0.6rem] text-[#64FFDA]"/>
                <p>MongoDB</p>
              </div>
              <div className="flex items-center space-x-2">
                <CornerDownRight className="mb-[0.6rem] text-[#64FFDA]"/>
                <p>Javascript</p>
              </div>
            </div>
            <div className="leading-10 flex-1">
              <div className="flex items-center space-x-2">
                <CornerDownRight className="mb-[0.6rem] text-[#64FFDA]"/>
                <p>Reactjs</p>
              </div>
              <div className="flex items-center space-x-2">
                <CornerDownRight className="mb-[0.6rem] text-[#64FFDA]"/>
                <p>Tailwind CSS</p>
              </div>
              <div className="flex items-center space-x-2">
                <CornerDownRight className="mb-[0.6rem] text-[#64FFDA]"/>
                <p>Firebase</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:mb-0 mb-[3rem]">
          <Image
            src="/Hrutvik2.0.jpg"
            alt="Hrutvik"
            height={500}
            width={400}
            className="md:h-[25rem] md:w-[20rem] h-[20rem] w-[15rem] relative lg:left-[20%] shadow-[20px_20px_#00fffb] rounded-md object-cover hover:shadow-none transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
