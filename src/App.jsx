import React from "react";
//layout
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./app/pages/Home";
import { AboutUs } from "./app/pages/AboutUs/AboutUs";

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
