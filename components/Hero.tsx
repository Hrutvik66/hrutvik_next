import React from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="lg:p-[8rem_5rem_2rem_9rem] p-[10rem_2rem] " id="Home">
      <div className=" flex-[1.5] w-full">
        <p className="text-[#64FFDA] font-Fira md:text-[1.2rem] text-[0.9rem]">
          Hi, my name is
        </p>
        <h1 className="lg:text-[5rem] md:text-[4.5rem] text-[2.8rem] text-[#fcfcfc] font-Inter font-bold">
          Hrutvik Malshikare
        </h1>
        <div className="mb-[2rem]">
          <h2 className="lg:text-[4.5rem] inline-block md:text-[3rem] text-[2.3rem] text-[#8892B0] font-Inter font-bold lg:leading-[3rem] leading-[3rem]">
            I build the applications.
          </h2>
          <p className="md:text-[1.3rem] text-[0.9rem] text-[#8892B0] font-Inter lg:my-10 my-6 md:w-[35rem] w-full text-justify">
            I am a developer who develops web as well as mobile applications. I
            am development technology enthusiast. Currently, I am focusing on
            learning more technologies.
          </p>
        </div>
        <div className="mb-9">
          <a href="#Contact">
            <button
              className={`border-[1px] border-solid border-[#3fffff] bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.5rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] w-[8rem] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_8rem_0_0_0_#00ffffa7] hover:text-[#0a192f]`}
            >
              Contact us!
            </button>
          </a>
        </div>
        <ul className="lg:hidden flex items-center space-x-8">
          <li className="text-[#ccd6f6] ">
            <a href="#">
              <GitHub className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]" />
            </a>
          </li>
          <li className="text-[#ccd6f6] ">
            <a href="#">
              <Linkedin className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]" />
            </a>
          </li>
          <li className="text-[#ccd6f6] ">
            <a href="#">
              <Instagram className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]" />
            </a>
          </li>
          <li className="text-[#ccd6f6] ">
            <a href="#">
              <Facebook className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
