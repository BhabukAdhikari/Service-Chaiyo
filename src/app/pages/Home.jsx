import React from "react";

// layouts
import { MainLayout } from "../layout";

import { Header } from "../components";
import { About } from "./About";
import { Testimonial } from "./Testimonals";
import { PopularCategories } from "./PopularCategories";

export const Home = () => {
  return (
    <MainLayout>
      <Header />
      <About />
      <Testimonial />
      <PopularCategories />
    </MainLayout>
  );
};
