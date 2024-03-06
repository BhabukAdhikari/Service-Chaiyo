import React from "react";

import "./Header.css";
import { Hero } from "../Hero";
import { TopBar } from "../Navbar";

export const Header = ( ) => {
  return (
      <>
          <TopBar title=".Travel" />
          <section className="header">
           <Hero />
          </section>
      </>
  );
};