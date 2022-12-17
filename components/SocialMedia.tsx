import React from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";

const SocialMedia = () => {
  return (
    <div className="fixed top-[40%] left-[3rem] h-[60%]">
      <ul className="flex flex-col justify-evenly h-[100%] w-[2rem] items-center">
        <li className="text-[#ccd6f6] ">
          <a href="#">
            <GitHub className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]"/>
          </a>
        </li>
        <li className="text-[#ccd6f6] ">
          <a href="#">
            <Linkedin className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]"/>
          </a>
        </li>
        <li className="text-[#ccd6f6] ">
          <a href="#">
            <Instagram className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]"/>
          </a>
        </li>
        <li className="text-[#ccd6f6] ">
          <a href="#">
            <Facebook className="transition-all duration-700 ease-in-out hover:-translate-y-2 hover:text-[#3fffff]"/>
          </a>
        </li>
        <li className="flex justify-center">
          <hr className="w-[4px] outline-none border-0 h-[8rem] border-solid bg-[#ccd6f6]" />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
