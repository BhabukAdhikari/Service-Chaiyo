import { React } from "react";
import { Footer, TopBar } from "../components";
import React from "react";
//components
import { Header, TopBar } from "../components";
import { About } from "../pages/About";
import { Testimonial } from "../pages/Testimonals";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <TopBar />
      {children}
      <Footer />
    </>
  );
}
