import React, { useEffect, useState } from "react";
import RecipeView from "../RecipeView/RecipeView";
import "./Tabs.scss";

function Tabs(props) {
  const [active, setActive] = useState("pizza");

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>

      {props.selectedRecipe ? (
        <RecipeView recipe={props.selectedRecipe} />
      ) : null}
    </div>
  );
}

export default Tabs;
