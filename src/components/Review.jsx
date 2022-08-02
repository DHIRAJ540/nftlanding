import React from "react";
import img from "../assets/main1.png";
import starImg from "../assets/star.svg";
import "./review.css"

const Review = () => {
  return (
    <div className="container">
      <div className="review_sec">
        <img src={img} alt="img" />
        <div className="review_details">
          <h1>Latest Reviews</h1>
          <div className="rev_card">
            <p>
              There are many variants of passages of reoren casum available but
              the majority have suffire there are many variations of passages
              garemy
            </p>
            <div className="stars">
              <img src={starImg} alt="star" />
              <img src={starImg} alt="star" />
              <img src={starImg} alt="star" />
              <img src={starImg} alt="star" />
              <img src={starImg} alt="star" />
              <p>5.0</p>
            </div>
          </div>
          <div className="dots">
            <div className="dot fill"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
