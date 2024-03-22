import React, { useEffect, useState } from "react";
import { Searchbar } from "../Searchbar";
import { Container } from "react-bootstrap";
import axios from "axios";

import "./Hero.css";
import { useInitialFetch } from "../../hooks/useInitialFetch";

export const Hero = () => {
  const {data} = useInitialFetch('')

  return (
    <div className="hero">
      <Container className="container mb-5">
        <h1 className="hero-title text-center text-light">Get Your Job Done Easily</h1>
        <h4 className="text-center text-light">
          Find your needed service at your own door
        </h4>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
      <Searchbar />
    </div>
  );
};
