import React, { useState } from "react";
import { Searchbar } from "../Searchbar";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container mb-5">
        <h1 className="hero-title text-center text-light">Get Your Job Done Easily</h1>
        <h4 className="text-center text-light">
          Find your needed service at your own door
        </h4>
      </div>
      <Searchbar />
    </div>
  );
};
