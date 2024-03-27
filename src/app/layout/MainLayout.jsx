import { React } from "react";
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
