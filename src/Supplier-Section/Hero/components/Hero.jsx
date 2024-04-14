import React from "react";
import { Frame27 } from "./Frame27/Frame27";
import "./Hero.css";
import SignUpPage from "../../Auth-Page/SignUpPage";
import { useNavigate } from "react-router-dom"; 

const Hero = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate("/herotwo"); 
  };

  return (
    <div className="hero-container">
      <Frame27 />
      <div className="page">
        <SignUpPage />
      </div>
      <button
        style={{
          color: "blue",
          cursor: "pointer",
          border: "none",
          backgroundColor: "white",
          marginLeft: "35%",
          marginTop: "-20px",
        }}
        onClick={handleNavigate}
      >
        <u>click here</u>
      </button>
      <p style={{ marginLeft: "41%", marginTop: "-25px" }}>
        {" "}
        here if you have account already
      </p>
    </div>
  );
};

export default Hero;
