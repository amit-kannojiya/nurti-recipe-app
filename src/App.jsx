import "./App.scss";
import Header from "./Componenets/Header/Header";
import Tabs from "./Componenets/Tabs/Tabs";
import RecipeLists from "./Componenets/RecipeLIsts/RecipeLists";
import React, { useState } from "react";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const changeSelectedRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };
  return (
    <>
      <div className="main">
        <Header />
        <Tabs selectedRecipe={selectedRecipe} />
        <RecipeLists
          changeSelectedRecipe={(recipe) => changeSelectedRecipe(recipe)}
        />
      </div>
    </>
  );
}

export default App;
