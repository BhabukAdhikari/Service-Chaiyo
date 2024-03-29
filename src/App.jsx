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

const App = () => {
  return (
    <AuthProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />

          <Route path="/supplier" element={<Supplier />} />
          <Route path="/supplier/account" element={<SupplierRegistration />} />
          <Route path="/supplier/sign-up" element={<SupplierSignUp />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
