import React, { useState, useEffect } from "react";
import "./Meal.scss";

function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=0b9a251a8c0a49eda7c43c0b9914674a&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  return (
    <article>
      <h1>{meal && <div>{meal.title}</div>}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preparation timing: {meal.readyInMinutes} minutes</li>
        <li>Number of serving: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}> Go to recipe</a>
    </article>
  );
}
export default Meal;
