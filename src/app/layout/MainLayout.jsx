import React from "react";
//components
import { Header, TopBar } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Header />
      {children}
    </div>
  );
};
