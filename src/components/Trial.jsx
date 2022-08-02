import React from "react";
import img from "../assets/main2.png";
import Button from "./Button";
import Link from "./Link";
import "./trial.css";

const Trial = () => {
  return (
    <div className="container trial_container">
      <div className="trial_details">
        <h1>Get free trial</h1>
        <p>
          There are many variations of passages of reoren many of casum
          available but the majority have suffire
        </p>
        <input type="text" placeholder="Enter your email" />
        <div className="trial_btn">
          <Button title="Join us now" />
          <Link title="Learn More" />
        </div>
      </div>
      <img src={img} alt="img" />
    </div>
  );
};

export default Trial;
