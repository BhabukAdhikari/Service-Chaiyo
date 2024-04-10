import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./app/pages/Home";
import { AboutUs } from "./app/pages/AboutUs/AboutUs";
import { Services } from "./app/pages/Services";
import { Jobs } from "./app/pages/Jobs/Jobs";
import { Login } from "./app/auth/Login";
import { SignUp } from "./app/auth/Sign";
import { Supplier } from "./app/supplier/Supplier";
import { SupplierSignUp } from "./app/supplier/SupplierSignUp";
import { SupplierRegistration } from "./app/supplier/Accout";
import { AuthProvider } from "./app/Auth-Provider/Provider";
import "./App.css";
import Hero from "./Supplier-Section/Hero/components/Hero";
import LoginPage from './Supplier-Section/Auth-Page/LoginPage';
import SignUpPage from './Supplier-Section/Auth-Page/SignUpPage';
import HeroTwo from "./Supplier-Section/Hero/components/HeroTwo";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/supplier/account" element={<SupplierRegistration />} />
          <Route path="/supplier/sign-up" element={<SupplierSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/hero" element={<Hero/>}/>
          <Route path="/herotwo" element={<HeroTwo/>}/>
          <Route exact path='/loginSupplier' element={<LoginPage />} />
          <Route exact path='/signUpSupplier' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
