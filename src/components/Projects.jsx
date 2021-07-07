import React, { useState, useEffect } from "react";
import calendarApp from "../images/calendar-app.png";
import weatherApp from "../images/weather-app.png";
import "../css/projects.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const Projects = () => {
  const projects = [
    {
      name: "Calendar App",
      linkPage: "https://lacinko.github.io/CalendarApp/",
      linkGithub: "https://github.com/lacinko/CalendarApp",
      img: calendarApp,
    },
    {
      name: "Weather App",
      linkPage: "https://lacinko.github.io/weather-app/",
      linkGithub: "https://lacinko.github.io/weather-app",
      img: weatherApp,
    },
  ];
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  function handleChange(direction) {
    if (direction === "back") {
      if (activeProjectIndex === 0) {
        setActiveProjectIndex(0);
        return;
      }
      setActiveProjectIndex((prevState) => prevState - 1);
    }
    if (direction === "forward") {
      if (activeProjectIndex === projects.length - 1) {
        setActiveProjectIndex(projects.length - 1);
        return;
      }

      setActiveProjectIndex((prevState) => prevState + 1);
    }
  }

  useEffect(() => {
    const next = (activeProjectIndex + 1) % projects.length;
    const id = setTimeout(() => setActiveProjectIndex(next), 3000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProjectIndex]);

  return (
    <div className="section projects" id="projects">
      <h4 className="projects__heading">Projects</h4>
      <div className="projects__container">
        <div className="projects__background"></div>
        <div className="projects__background-bottom"></div>
        <button
          onClick={() => handleChange("back")}
          className="projects__left-arrow"
        >
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <span>
          <h5 className="projects__name">
            {projects[activeProjectIndex].name}
            <a
              href={projects[activeProjectIndex].linkGithub}
              className="projects__link-github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                Link <strong>to</strong> Github
              </p>
            </a>
          </h5>

          <a
            href={projects[activeProjectIndex].linkPage}
            className="projects__link-page"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={projects[activeProjectIndex].img}
              alt=""
              srcSet=""
              className="projects__project-img"
            />
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
