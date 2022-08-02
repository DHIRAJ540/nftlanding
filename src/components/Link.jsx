import React from "react";
import arrow from "../assets/right.svg";
import "./link.css";

const Link = ({ title }) => {
  return (
    <div className="link">
      <h5>{title}</h5>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default Link;
