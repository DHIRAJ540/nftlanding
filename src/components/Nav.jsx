import React, { useState } from "react";
import Button from "./Button";
import "./nav.css";
import logo from "../assets/logo.svg";

const { ethereum } = window;

const Nav = () => {
  const [currentAccount, setCurrentAccount] = useState();
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      console.log(accounts[0]);

      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object...");
    }
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar">
          <div className="nav_items">
            <div className="nav_item">Home</div>
            <div className="nav_item">About</div>
            <div className="nav_item">Feature</div>
            <div className="nav_item">Team</div>
          </div>
        </div>
        <div className="sginin" onClick={() => connectWallet()}>
          <Button
            title={
              currentAccount
                ? String(currentAccount.slice(0, 20) + "...")
                : "Sign in"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
