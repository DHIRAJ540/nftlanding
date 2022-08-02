import React from "react";
import "./home.css";
import dollar from "../assets/dollar.svg";
import homeBg from "../assets/home.png";
import paws from "../assets/p.svg";
import Button from "./Button";
import Link from "./Link";

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <img src={paws} alt="paws" className="paws" />
        <div className="details">
          <div className="sub">
            <img src={dollar} alt="dollar" />
            <h4>PLAY MORE EARN MORE</h4>
          </div>
          <div className="heading">
            <h1>PLAY</h1>
            <div className="mid">
              <p>F</p>
              <p>O</p>
              <p>R</p>
            </div>
            <h1>EARN</h1>
          </div>
          <div className="btn_sec">
            <Button title="Get A Free Trial" />
            <Link title="Learn More" />
          </div>
        </div>
        <div className="banner">
          <img src={homeBg} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
