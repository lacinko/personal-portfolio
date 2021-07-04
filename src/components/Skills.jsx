import React from "react";
import { Card } from "./Card";
import checkbox from "../images/checkbox.svg";
import expressJs from "../images/expressjs.png";
import "../css/skills.css";

export const Skills = () => {
  const skillsArray = [
    {
      id: 1,
      name: "HTML",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      id: 2,
      name: "CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png",
    },
    {
      id: 4,
      name: "REACT",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    },
    {
      id: 5,
      name: "SASS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    },
    {
      id: 6,
      name: "BOOTSTRAP",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    },
    {
      id: 7,
      name: "NODEJS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    },
    {
      id: 8,
      name: "C#",
      src: "https://cdnlogo.com/logos/c/27/c.svg",
    },
    {
      id: 9,
      name: "POSTGRESQL",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
    {
      id: 10,
      name: "PHOTOSHOP",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
    },
    {
      id: 11,
      name: "FIGMA",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      id: 12,
      name: "EXPRESSJS",
      src: expressJs,
    },
  ];

  return (
    <div className="section skills" id="skills">
      <h4>Skills</h4>
      <img src={checkbox} alt="" className="skills__background" />
      <div className="skills__container">
        {skillsArray.map((skill) => (
          <Card
            id={skill.id}
            name={skill.name}
            src={skill.src}
            classN="skillcard"
          />
        ))}
      </div>
    </div>
  );
};
