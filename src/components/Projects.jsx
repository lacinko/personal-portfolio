import React from "react";
import "../css/projects.css";

export const Projects = () => {
  return (
    <div className="section projects">
      <h4 className="projects__heading">Projects</h4>
      <div className="projects__container">
        <span>
          <h5>Calendar App</h5>
          <a
            href="https://lacinko.github.io/CalendarApp/"
            className="projects__link-page"
            target="_blank"
          >
            <img
              src="./calendar-app.png"
              alt=""
              srcset=""
              className="projects__project-img"
            />
          </a>
          <a
            href="https://github.com/lacinko/CalendarApp"
            className="projects__link-github"
            target="_blank"
          >
            <p>Link to Github.</p>
          </a>
        </span>
        <span>
          <h5>Calendar App</h5>
          <a
            href="https://lacinko.github.io/CalendarApp/"
            className="projects__link-page"
            target="_blank"
          >
            <img
              src="./calendar-app.png"
              alt=""
              srcset=""
              className="projects__project-img"
            />
          </a>
          <a
            href="https://github.com/lacinko/CalendarApp"
            className="projects__link-github"
            target="_blank"
          >
            <p>Link to Github.</p>
          </a>
        </span>
      </div>
    </div>
  );
};
