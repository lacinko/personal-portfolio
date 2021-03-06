import React from "react";
import hand from "../images/hand.jpg";
import "../css/info.css";

export const Info = () => {
  return (
    <section className="section info">
      <span className="section__img-container">
        <h2 className="section__heading">
          Hello, <strong>nice</strong> to<strong> meet </strong>you.
        </h2>
        <img className="section__img-about-me" src={hand} alt="profile-pic" />
      </span>
      <div className="section__container">
        <div className="section__triangle">
          <img
            src="https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </section>
  );
};
