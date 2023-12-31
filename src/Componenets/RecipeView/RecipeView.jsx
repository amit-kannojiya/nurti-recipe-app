import React from "react";

import { GiCheckMark } from "react-icons/gi";

function RecipeView(props) {
  const recipe = props.recipe.recipe;
  console.log(recipe);
  return (
    <div className="recipe_banner">
      <div className="left-col">
        <span className="badge">{recipe.cuisineType[0]}</span>
        <h1>{recipe.label}</h1>
        <p>
          <strong>Calories:</strong>

          <small>{recipe.calories.toFixed(0)}</small>
        </p>
        <h3>Ingredients:</h3>
        <div className="ingredients">
          <ul>
            {recipe.ingredients.map((ingredient) => {
              return (
                <li key={ingredient.weight}>
                  <GiCheckMark />
                  &nbsp;
                  <span>{ingredient.food}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="right-col">
        <div className="image-wrapper">
          <img src={recipe.images.REGULAR.url} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RecipeView;
