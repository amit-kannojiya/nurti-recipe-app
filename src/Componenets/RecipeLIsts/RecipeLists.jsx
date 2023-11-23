import React from "react";
import { BsSearch } from "react-icons/bs";
import "./RecipeLists.scss";
import { useEffect, useState } from "react";
import { fetchData } from "../../service";
import { CiPizza } from "react-icons/ci";

function RecipeLists(props) {
  const [searchedTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState("");

  //   useState does something like this
  //   const recipes = []
  //   function setRecipes(someData){
  //     recipes = someData;
  //   }

  //   useEffect(initData, []);
  useEffect(() => {
    const initData = async () => {
      const data = await fetchData("pizza");
      setRecipes(data);
      props.changeSelectedRecipe(data.hits[0]);
    };

    initData();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
    const data = await fetchData(query);
    console.log(data);
    setRecipes(data);
    props.changeSelectedRecipe(data.hits[0]);
  };
  const displayValue = (recipe) => {
    // console.log(recipe);
    props.changeSelectedRecipe(recipe);
  };
  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <form onSubmit={(event) => handleSearch(event)}>
            <input type="text" placeholder="Search" name="searchQuery" />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="flexbox">
        {recipes &&
          recipes.hits.map((item, index) => {
            return (
              <div
                onClick={() => displayValue(item)}
                key={index}
                className="flexItem"
              >
                <div className="img-wrapper">
                  <img src={item.recipe.image} alt={item.recipe.label} />
                </div>
                <p>{item.recipe.label}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RecipeLists;
