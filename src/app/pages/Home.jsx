import React from "react";

// layouts
import { MainLayout } from "../layout";

import { Header } from "../components";
import { About } from "./About";
import { Testimonial } from "./Testimonals";
import { PopularCategories } from "./Popular-Categories/PopularCategories";
import { StaticsCounter } from "./Statics-Counter/StaticsCounter";

export const Home = () => {
  return (
    <MainLayout>
      <Header />
      <About />
      <Testimonial />
      <PopularCategories />
      <StaticsCounter/>
    </MainLayout>
  );
};
