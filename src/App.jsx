import "./App.scss";
import Header from "./Componenets/Header/Header";
import Tabs from "./Componenets/Tabs/Tabs";
import RecipeLists from "./Componenets/RecipeLIsts/RecipeLists";
import React, { useState } from "react";
import MealList from "./Componenets/MealList/MealList";
import RecipeView from "./Componenets/RecipeView/RecipeView";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setcalories] = useState(2000);
  const [selectedRecipe, setSelectedRecipe] = useState();

  function handleChange(event) {
    setcalories(event.target.value);
  }
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=0b9a251a8c0a49eda7c43c0b9914674a&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  const changeSelectedRecipe = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <div className="main">
        <Header />
        <Tabs selectedRecipe={selectedRecipe} />
        {/* <RecipeView /> */}
        <RecipeLists
          changeSelectedRecipe={(recipe) => changeSelectedRecipe(recipe)}
        />
      </div>
      <div className="App">
        <div className="controls">
          <input
            type="number"
            placeholder="calories "
            onchange={handleChange}
          />
        </div>
        <button onClick={getMealData}>get daily meal plan</button>
        {mealData && <MealList mealData={mealData} />}
      </div>
    </>
  );
}

export default App;
