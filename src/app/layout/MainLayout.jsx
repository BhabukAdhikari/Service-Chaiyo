import React from "react";
//components
import { Header, Searchbar, TopBar } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
