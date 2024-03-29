// Next image
import Image from "next/image";
// React
import React, { useState, Dispatch, SetStateAction } from "react";
// React Feather
import { Menu, X } from "react-feather";

const Navbar = () =>
  // TODO: Fix this
  //   {
  //   menuData,
  // }: {
  //   menuData: Dispatch<SetStateAction<boolean>>;
  //     }
  {
    const [menu, setMenu] = useState(false);

    const popUpMenu = () => {
      setMenu(!menu);
      // menuData(!menu);
    };
    return (
      <div className="flex justify-between items-center p-[1rem] bg-[#0a192fc1] lg:px-[4rem] px-[2rem] font-Fira fixed w-[100%] backdrop-blur-lg z-50">
        <a href="#Home">
          <Image
            src="/Black_Logo.gif"
            height={32}
            width={32}
            alt="H"
            className="h-8"
          />
        </a>
        <ul
          id="Menu"
          className={`lg:flex lg:flex-row lg:space-x-20 lg:space-y-0 lg:p-0 lg:bg-transparent lg:w-min lg:static lg:opacity-100 lg:translate-x-0 justify-evenly items-center text-[#ccd6f6] flex-col space-y-4 bg-[#0a192fc1]  text-center w-full ${
            menu
              ? "translate-x-0 opacity-100 backdrop-blur-lg"
              : "translate-x-[100%] opacity-0"
          } p-3 absolute top-16 right-0 transition-all duration-700 ease-in-out`}
        >
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
            <a
              href="https://drive.google.com/file/d/1DETUyxOTEwCRmpThlG7Ickz8Fz9CP-rr/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className={`border-[1px] border-solid border-[#3fffff] bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_7rem_0_0_0_#00ffffa7] hover:text-[#0a192f]`}
              >
                Resume
              </button>
            </a>
          </li>
        </ul>
        {menu ? (
          <X className="lg:hidden text-[#ccd6f6]" onClick={popUpMenu} />
        ) : (
          <Menu className="lg:hidden text-[#ccd6f6]" onClick={popUpMenu} />
        )}
      </div>
    );
  };

export default Navbar;
