import React from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Home } from "./app/pages/Home";
import { AboutUs } from "./app/pages/AboutUs/AboutUs";
import { Services } from "./app/pages/Services";
import { Jobs } from "./app/pages/Jobs/Jobs";
import "./App.css";
import Hero from "./Supplier-Section/Hero/components/Hero";
import HeroTwo from "./Supplier-Section/Hero/components/HeroTwo";
import OTP from "./Supplier-Section/Auth-Page/OTP";
import AdminAuth from "./Supplier-Section/Auth-Page/AdminAuth";
import Dashboard from "./Dashboard/Dashboard";
import Request from "./Dashboard/Pages/Request";
import Review from "./Dashboard/Pages/Review";
import Schedule from "./Dashboard/Pages/Schedule";
import ServiceManagement from "./Dashboard/Pages/ServiceManagement";
import Main from "./Dashboard/Pages/Main";

const App = () => {
  

  return (
    <Router>
      <div className="home-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route exact path="/otp" element={<OTP />} />
          <Route exact path="/AdminAuth" element={<AdminAuth />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/herotwo" element={<HeroTwo />} />
          <Route path="/serviceM" element={<ServiceManagement />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/request" element={<Request />} />
          <Route path="/review" element={<Review />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
    </div>

    
    </Router>
  );
};

export default App;
