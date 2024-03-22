import React from "react";
//components
import { Header, TopBar } from "../components";
import { About } from "../pages/About";
import { Testimonial } from "../pages/Testimonals";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Header /> */}
      <About />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
};
