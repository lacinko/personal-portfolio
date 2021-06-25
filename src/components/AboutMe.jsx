import React from "react";
import "../css/aboutme.css";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

export const AboutMe = () => {
  return (
    <section className="section about-me" id="about-me">
      <h4>About Me</h4>
      <div className="about-me__container">
        <img
          src="https://lh3.googleusercontent.com/0WIsRkl0aJphLVwA5-lOfF7HhEMZ0IEjpm9X30nTVB8caOLgyihkCTEkqRlP4SN9VeI0vP6Fu2aUv1qrUcE6zoTAdkPLkaaTJ5rR6KXSjaJXMDNLL1tsvIf8x5X6xEhKLZQPBK6RlN93g-fX2uCW59KeH-aCnn1hC5uC2BbeUF_6A6JGfGJ_r0SqyLhxI88v2ihFwG-cGWi60sXcrqUWakduBG9IDfoL57Koialmtg_FxIj_u7IshunFf_Omc3S8hDr3vTHLupjTvAvObHQ3eM4eCURTRswb7ffBSISNsNsmgqTmRFjiXCxsA30AJaQy9oQXvI4O9FQTJdKsi-8SCW2HIBXILRTeX3rFmsiCUMwNcvgZ-4HzQAjA06n0mweyZYVJxYBMKYW0qrUKeFUoWY_iyQ4v5rI3zQ6yDLEAKOij2dzaZTMtnoIMQINhT1oUnD3zW04k-Qs7DpaZX0aWkBzN7WGB4WzGAQxqadgpkXNTODBtH1qzlZZty28ocdMuER4L9b1nrbdqMq0kX3qJonOdnr0UpgAvDJN0_asoPKy3iMXToRU47Jz08KG42gqD6Go2KDBudC6ppPRoV0Th83WewfIScc8jBFM6pYdtIU7567CexVAG6cKIuOA7d-hcDIxAymBRQYo2NfOk7S4DlaL93FelfNDp-QUNdtEFGbfFWSTCE5UTvro4AWqHWtFhHNzGK_nCMkrNMwfJUxCDAM1i=w733-h937-no?authuser=0"
          alt=""
          srcset=""
        />
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
