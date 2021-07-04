import React from "react";
import profilePic from "../images/profile-picture.png";
import "../css/aboutme.css";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import CV from "../download/Topolsky_Ladislav_CV.pdf";

export const AboutMe = () => {
  return (
    <section className="section about-me" id="about-me">
      <h4>About Me</h4>
      <div className="about-me__container">
        <img src={profilePic} alt="" srcset="" />
        <div className="about-me__background"></div>
        <ul class="section__list">
          <li className="section__list-item">
            <PersonIcon />
            20 October 1992
          </li>
          <li className="section__list-item">
            <HomeIcon />
            Podjavonrinskej 3384/3, 058 01 Poprad
          </li>
          <li className="section__list-item">
            <PhoneAndroidIcon />
            +420 703 537 215
          </li>
          <li className="section__list-item">
            <PhoneAndroidIcon />
            +421 904 273 018
          </li>
          <li className="section__list-item">
            <EmailIcon />
            ladislav.topolsky@gmail.com
          </li>
          <li className="section__list-item">
            <a href={CV} download="Topolsky_Ladislav_CV.pdf">
              Download CV
            </a>
          </li>
        </ul>
        <div className="about-me__text-container">
          <p>
            I am a young aspiring frontend developer. Currently located in
            Prague. Studying at university. In my free time i like to study
            frontend development. Highly motivated and well organized.
          </p>
          <p>
            I am a quick learner and a good problem slover. Can work under
            pressure. I can speak English fluently and have a basic knowledge of
            German language.
          </p>
          <p>
            My most recent project that I am currently working on is Calendar
            App in pure Javascript. You can have a look at the projects section
            of this page.
          </p>
          <p>I am an active person, really like weightlifting and running.</p>
        </div>
      </div>
    </section>
  );
};
