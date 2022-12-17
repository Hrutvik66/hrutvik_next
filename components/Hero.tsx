import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="lg:p-[8rem_10rem_2rem_10rem] p-[5rem_1rem] " id="Home">
      <div className="space-y-2 flex-[1.5] w-full">
        <p className="text-[#64FFDA] font-Fira text-[1.2rem]">Hi, my name is</p>
        <h1 className="lg:text-[5rem] text-[4rem] text-[#fcfcfc] font-Inter font-bold">
          Hrutvik Malshikare
        </h1>
        <div className="mb-[3rem]">
          <h2 className="lg:text-[5rem] inline-block text-[4rem] text-[#8892B0] font-Inter font-bold lg:leading-[3rem] leading-[2rem]">
            I build the applications.
          </h2>
          <p className="text-[1.3rem] text-[#8892B0] font-Inter my-10 w-[35rem] text-justify">I am a developer who develops web as well as mobile applications. I am development technology enthusiast. Currently, I am focusing on learning more technologies.</p>
        </div>
        <div>
          <a href="#Contact">
            <button
              className={`border-[1px] border-solid border-[#3fffff] bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.5rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] w-[8rem] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_8rem_0_0_0_#00ffffa7] hover:text-[#0a192f]`}
            >
              Contact us!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
