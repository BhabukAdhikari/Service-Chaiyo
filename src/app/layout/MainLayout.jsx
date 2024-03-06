import React from "react";
//components
import { Header, TopBar } from "../components";
import { Navbar } from "../components";
import { Header } from "../components";
import { Searchbar } from "../components/Searchbar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Header />
      {/* <Navbar />
      <Header /> */}
      {/* <Searchbar/> */}
      {children}
    </div>
  );
};
