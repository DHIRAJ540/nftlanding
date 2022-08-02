import React from "react";
import logo from "../assets/logo.svg";
import "./footer.css"

const FooterDetail = ({ title, sub1, sub2 }) => {
  return (
    <div className="footer_details">
      <h3>{title}</h3>
      <p>{sub1}</p>
      <p>{sub2}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container footer_container ">
      <div className="footer_left">
        <div className="footer_head">
          <img src={logo} alt="logo" />
          <h3>Didital Agency</h3>
        </div>
        <p>NFT's are transforming the way commerce is a transacted</p>
      </div>
      <div className="footer_right">
        <FooterDetail
          title="Quick Links"
          sub1="Protocol Explore"
          sub2="System Token"
        />
        <FooterDetail
          title="Information"
          sub1="Market Explore"
          sub2="Ready Token"
        />
        <FooterDetail title="Company" sub1="Marketplace" sub2="System Token" />
        <FooterDetail title="Social Media" sub1="Facebook" sub2="Instagram" />
      </div>
    </div>
  );
};

export default Footer;
