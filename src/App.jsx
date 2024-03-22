import React from "react";
//layout
import { MainLayout } from "./app/layout";
import './App.css'
import { PopularCategories } from "./app/pages/Popular-Categories/PopularCategories";

const App = () => {
  return (
    <MainLayout>
      {/* <Searchbar /> */}
      <PopularCategories />
    </MainLayout>
  );
};

export default App;
