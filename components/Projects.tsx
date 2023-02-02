import React from "react";
import Project_card from "./Project_card";
import projects from "../data/Project_data.json";

const Projects = () => {
  return (
    <div
      className="lg:p-[5rem_5rem_5rem_9rem] p-[3.5rem_1rem_3.5rem] font-Inter"
      id="Projects"
    >
      <div className="flex items-center text-[#ccd6f6]">
        <h1 className="font-bold text-[2rem]">Projects</h1>
        <hr className="flex-1 h-[1px] ml-[1rem] border-solid bg-[#ccd6f6] outline-none" />
      </div>
      {
        projects.map((project) => {
          return <Project_card {...project} key={project.Name} />;
        })
      }
    </div>
  );
};

export default Projects;
