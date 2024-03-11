import React from "react";

// layouts
import { MainLayout } from "../layout";
import { Header } from "../components";
import { About } from "./About";
import { Testimonial } from "./Testimonals";
import { PopularCategories } from "./PopularCategories/PopularCategories";
import { Jobs } from "./Jobs/Jobs";


export const Home = () => {
  return (
    <div>
      <MainLayout>
        <Header />
        <About />
        <Testimonial />
        <PopularCategories />
        <Jobs />
      </MainLayout>
    </div>
  );
};
