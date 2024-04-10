import React from "react";
import { Frame27 } from "./Frame27/Frame27";
import "./Hero.css";

import SignUpPage from "../../Auth-Page/SignUpPage";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <Frame27 />

      <div className="page">
        {/* <LoginPage/> */}
        <SignUpPage/>
      </div>
      <p style={{marginLeft: "35%", marginTop: "-2px"}} >Already have an account than <button style={{color: "blue" , cursor: "pointer" , border: "none" , backgroundColor: "white"}} onClick={navigate('/herotwo')} ><u>click here</u></button></p>
    </div>
  );
};

export default Hero;
