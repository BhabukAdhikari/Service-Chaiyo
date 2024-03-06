import React from "react";
//layout
import { MainLayout } from "./app/layout";
import { Searchbar } from "./app/components/Searchbar";

const App = () => {
  return (
    <MainLayout>
      <Searchbar />
    </MainLayout>
  );
};

export default App;
