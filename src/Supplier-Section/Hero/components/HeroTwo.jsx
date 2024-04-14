import React from "react";
import { Frame27 } from "./Frame27/Frame27";
import "./Hero.css";
import LoginPage from "../../Auth-Page/LoginPage";
import { useNavigate } from "react-router-dom";

const HeroTwo = () => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
        navigate('/hero'); 
    };

    return (
        <div className="hero-container">
            <Frame27 />
            <div className="page">
                <LoginPage />
            </div>
            <p style={{ marginLeft: "41%", marginTop: "40px" }}>
                <u
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={handleNavigate} 
                >
                    click here
                </u>{" "}
                to create new account
            </p>
        </div>
    );
};

export default HeroTwo;
