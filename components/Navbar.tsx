import React,{useState} from "react";
import { Crosshair, Menu, X } from "react-feather";
import Button from "./Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const popUpMenu = () => {
    setMenu(!menu);
  }
  return (
    <div className="flex justify-between items-center p-[1rem] bg-[#0a192fc1] px-[4rem] font-Fira fixed w-[100%] backdrop-blur-lg z-50">
      <a href="#">
        <img src="/Black_Logo.gif" alt="H" className="h-8" />
      </a>
      <ul id="Menu" className={`lg:flex lg:flex-row lg:space-x-20 lg:space-y-0 lg:p-0 lg:bg-transparent lg:w-min lg:static lg:opacity-100 lg:translate-x-0 justify-evenly items-center text-[#ccd6f6] flex-col space-y-4 bg-[#0a192fc1]  text-center w-full ${menu ? "translate-x-0 opacity-100 backdrop-blur-lg" :"translate-x-[100%] opacity-0"} p-3 absolute top-16 right-0 transition-all duration-700 ease-in-out`}>
        <li className="lg:p-0 p-2">
          <a href="#Home" className="hover:text-[#3fffff]">
            Home
          </a>
        </li>
        <li className="lg:p-0 p-2">
          <a href="#About" className="hover:text-[#3fffff]">
            About
          </a>
        </li>
        <li className="lg:p-0 p-2">
          <a href="#Projects" className="hover:text-[#3fffff]">
            Projects
          </a>
        </li>
        <li className="lg:p-0 p-2">
          <a href="#Contact" className="hover:text-[#3fffff]">
            Contact
          </a>
        </li>
        <li className="lg:p-0 p-2">
          <button
            className={`border-[1px] border-solid border-[#3fffff] bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_7rem_0_0_0_#00ffffa7] hover:text-[#0a192f]`}
          >
            Resume
          </button>
        </li>
      </ul>
      {menu ? <X className="lg:hidden text-[#ccd6f6]" onClick={popUpMenu}/> :<Menu className="lg:hidden text-[#ccd6f6]" onClick={popUpMenu}/>}
    </div>
  );
};

export default Navbar;
