import React, { useState } from "react";
import "../css/projects.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const Projects = () => {
  const projects = [
    {
      name: "Calendar App",
      linkPage: "https://lacinko.github.io/CalendarApp/",
      linkGithub: "https://github.com/lacinko/CalendarApp",
      img: "./calendar-app.png",
    },
    {
      name: "Weather App",
      linkPage: "https://lacinko.github.io/weather-app/",
      linkGithub: "https://lacinko.github.io/weather-app",
      img: "./weather-app.png",
    },
  ];
  let projectNumber = 0;
  const [activeProject, setActiveProject] = useState(projects[projectNumber]);

  function handleChange(direction) {
    if (direction === "back") {
      if (projectNumber === 0) {
        setActiveProject(projects[projectNumber]);
        return;
      }
      projectNumber--;
      setActiveProject(projects[projectNumber]);
      console.log(projectNumber);
    }
    if (direction === "forward") {
      if (projectNumber === projects.length) {
        setActiveProject(projects[projectNumber]);
        return;
      }
      projectNumber++;
      setActiveProject(projects[projectNumber]);
      console.log(projectNumber);
    }
  }
  return (
    <div className="section projects">
      <h4 className="projects__heading">Projects</h4>
      <div className="projects__container">
        <button
          onClick={() => handleChange("back")}
          className="projects__left-arrow"
        >
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <span>
          <img
            src="./browser-window.png"
            alt=""
            srcset=""
            className="projects__browser-overlay"
          />
          <h5 className="projects__name">{activeProject.name}</h5>
          <a
            href={activeProject.linkPage}
            className="projects__link-page"
            target="_blank"
          >
            <img
              src={activeProject.img}
              alt=""
              srcset=""
              className="projects__project-img"
            />
          </a>
          <a
            href={activeProject.linkGithub}
            className="projects__link-github"
            target="_blank"
          >
            <p>Link to Github.</p>
          </a>
        </span>
        <button
          onClick={() => handleChange("forward")}
          className="projects__right-arrow"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

/*
<span>
          <h5>Weather App</h5>
          <a
            href="https://lacinko.github.io/weather-app/"
            className="projects__link-page"
            target="_blank"
          >
            <img
              src="./weather-app.png"
              alt=""
              srcset=""
              className="projects__project-img"
            />
          </a>
          <a
            href="https://lacinko.github.io/weather-app"
            className="projects__link-github"
            target="_blank"
          >
            <p>Link to Github.</p>
          </a>
        </span>
        */
