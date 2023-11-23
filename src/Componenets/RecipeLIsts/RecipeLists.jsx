import React from "react";
import { BsSearch } from "react-icons/bs";
import "./RecipeLists.scss";
import { useEffect, useState } from "react";
import { fetchData } from "../../service";

function RecipeLists() {
  const [searchedTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");

  //   const initData = async () => {
  //     const data = await fetchData("apple");
  //     console.log(data);
  //     setData(data);
  //   };

  //   useEffect(initData, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.searchQuery.value;
    const data = await fetchData(query);
    console.log(data);
    setData(data);
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
        {data &&
          data.hits.map((item, index) => {
            return (
              <div key={index} className="flexItem">
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
