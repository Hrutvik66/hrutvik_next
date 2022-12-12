import React from "react";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="pt-[8rem] pr-[5rem] pl-[8rem] flex items-center justify-between"
      id="Home"
    >
      <div className="space-y-2 p-[1rem] flex-[1.5]">
        <h1 className="text-[5rem] text-[#47f7bc] font-Lobster font-bold leading-[6rem]">
          Hrutvik <br /> Malshikare
        </h1>
        <div className="mb-[3rem]">
          <p className="text-[2rem] text-[#ccd6f6] font-Fira">I am</p>
          <div className="text-[2.5rem] text-[#898aa6] font-Fira leading-[3rem]">
            <Typewriter
              options={{
                strings: [
                  "Website Developer",
                  "Application Developer",
                  "Development Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
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
      <div className="flex-1">
        <img src="./Hero_image.gif" className="h-[30rem] w-[35rem]" />
      </div>
    </div>
  );
};

export default Hero;
