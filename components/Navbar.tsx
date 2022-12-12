import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[1rem] bg-[#0a192fc1] px-[4rem] font-Fira fixed w-[100%] backdrop-blur-lg">
      <a href="#">
        <img src="/Black_Logo.gif" alt="H" className="h-8" />
      </a>
      <ul className="flex justify-evenly items-center space-x-20 text-[#ccd6f6]">
        <li>
          <a href="#Home" className="hover:text-[#3fffff]">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-[#3fffff]">
            About
          </a>
        </li>
        <li>
          <a href="#Project" className="hover:text-[#3fffff]">
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" className="hover:text-[#3fffff]">
            Contact
          </a>
        </li>
        <li>
          <button
            className={`border-[1px] border-solid border-[#3fffff] bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_7rem_0_0_0_#00ffffa7] hover:text-[#0a192f]`}
          >
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
