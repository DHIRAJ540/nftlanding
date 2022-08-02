import React from "react";
import Link from "./Link";
import "./card.css";

const Card = ({ title, subTitle, img, shadow, margin }) => {
  return (
    <div
      className="card"
      style={{
        boxShadow: `${
          shadow ? "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : ""
        }`,
        marginBottom: `${margin ? "5rem" : "0"}`,
      }}
    >
      <img src={img} alt="card img" className="card_img" />
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <Link title="Learn More" />
    </div>
  );
};

export default Card;
