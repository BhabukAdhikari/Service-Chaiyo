import React from "react";
//components
import { Navbar } from "../components";
import { Header } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
    </div>
  );
};
