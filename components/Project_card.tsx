import Image from "next/image";
import React from "react";
import { GitHub, Link2 } from "react-feather";

const Project_card = ({
  Name,
  Description,
  Technologies,
  Image_link,
  Link,
  Github,
}: {
  Name: string;
  Description: string;
  Technologies: string;
  Image_link: string;
  Link: string;
  Github: string;
}) => {
  return (
    <div className="flex lg:flex-row lg:space-x-4 items-center p-[5rem_0] flex-col h-[30rem]">
      <div className="flex-1 bg-[#64FFDA] rounded-md w-[35rem]">
        <Image
          src={Image_link}
          alt="Brokar"
          width={600}
          height={600}
          className="hover:opacity-[60%] object-fit transition-all duration-700 ease-in h-[20rem] w-[560px]"
        />
      </div>
      <div className="flex-1 space-y-5 p-3">
        <a href="">
          <h1 className="font-bold text-[2rem] text-right text-white hover:text-[#64FFDA]">
            {Name}
          </h1>
        </a>
        <p className="text-justify text-[#8892B0] font-Fira">{Description}</p>
        <div className="flex space-x-4 justify-end font-Fira text-[#64FFDA]">
          {Technologies.split(",").map((tech) => {
            return <p>{tech}</p>;
          })}
        </div>
        <div className="flex justify-end space-x-10 text-[#8892B0] ">
          <a href={Github}>
            <GitHub className="hover:text-[#64FFDA] h-[1.5rem] w-[1.5rem]" />
          </a>
          <a href={Link}>
            <Link2 className="hover:text-[#64FFDA] h-[1.5rem] w-[1.5rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project_card;
