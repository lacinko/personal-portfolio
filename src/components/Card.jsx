import React from "react";
import "../css/skills.css";

export const Card = ({ name, src, classN }) => {
  return (
    <div className={classN}>
      <h5>{name}</h5>
      <img src={src} alt="" srcSet="" />
    </div>
  );
};
