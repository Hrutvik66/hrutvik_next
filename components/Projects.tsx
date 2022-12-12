import React from "react";

const Projects = () => {
  return (
    <div id="Project">
      <div className="Project-heading">
        <h1>Projects</h1>
        <hr className="flex-1 h-1px ml-[1rem] border-solid bg-[#ccd6f6] outline-none" />
      </div>
      <div className="project-list">
        <div className="project">
          <div className="project-image">
            <img className="project-img" src="./Next-web.png" alt="project1" />
          </div>
          <div className="project-info">
            <h1>E-commerce</h1>
            <p>
              This is an E-commerce website made using Nextjs, Tailwind CSS and
              Firebase.
            </p>
            <div className="project-links">
              <button>
                <i data-feather="link"></i>
              </button>
              <button>
                <i data-feather="code"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img className="project-img" src="./Chat-web.png" alt="project2" />
          </div>
          <div className="project-info">
            <h1>Chat Application</h1>
            <p>
              This is a chat application made using Nextjs, Tailwind and
              Firebase.
            </p>
            <div className="project-links">
              <button>
                <i data-feather="link"></i>
              </button>
              <button>
                <i data-feather="code"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img className="project-img" src="./React-web.png" alt="project3" />
          </div>
          <div className="project-info">
            <h1>E-commerce</h1>
            <p>This is an E-commerce website made using MERN components.</p>
            <div className="project-links">
              <button>
                <i data-feather="link"></i>
              </button>
              <button>
                <i data-feather="code"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
