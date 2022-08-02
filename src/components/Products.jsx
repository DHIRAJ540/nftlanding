import React from "react";
import "./products.css";
import Card from "./Card";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";

const Products = () => {
  return (
    <div className="container prod_container ">
      <h1>Top Caracters</h1>
      <div className="cards">
        <Card
          title="Luna Bella"
          subTitle="Leading NFT platform to get all the details about secret upcoming"
          img={img1}
        />
        <Card
          title="Leo Charlie"
          subTitle="Leading NFT platform to get all the details about secret upcoming"
          img={img2}
          shadow="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          margin
        />
        <Card
          title="Lucy Oliver"
          subTitle="Leading NFT platform to get all the details about secret upcoming"
          img={img3}
        />
      </div>
    </div>
  );
};

export default Products;
