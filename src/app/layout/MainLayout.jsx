import { React } from "react";
<<<<<<< HEAD
=======
import { Footer, TopBar } from "../components";
import React from "react";
>>>>>>> 2d48e9d6a972dc8baf485066a9ce6ca89cabffa9
import { Footer, TopBar } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
}
