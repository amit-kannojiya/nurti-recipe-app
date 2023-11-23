import React from "react";
import Meal from "../Meal/Meal";

function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  return (
    <main>
      <section className="nutients">
        <h1>macros</h1>
        <ul>
          <li>calories:{nutrients.calories.toFixed(0)}</li>
          <li>carbohydrates:{nutrients.carbohydrates.toFixed(0)}</li>
          <li>fat:{nutrients.fat.toFixed(0)}</li>
          <li>protein:{nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>
      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}

export default MealList;
