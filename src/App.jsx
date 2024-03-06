import React from "react";
//layout
import { MainLayout } from "./app/layout";
import { Searchbar } from "./app/components/Searchbar";
import './App.css'
import { PopularCategories } from "./app/pages/PopularCategories/PopularCategories";

const App = () => {
  return (
    <MainLayout>
      {/* <Searchbar /> */}
      <PopularCategories />
    </MainLayout>
  );
};

export default App;
