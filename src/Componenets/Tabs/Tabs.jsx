import React, { useEffect, useState } from "react";
import { CiPizza } from "react-icons/ci";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import "./Tabs.scss";
function Tabs() {
  const [active, setActive] = useState("pizza");
  const [tabLabel, setTabLabel] = useState([
    {
      name: "pizza",
      icon: <CiPizza />,
      id: "b2ebad01df2a319d259c2d3f61eb40c5",
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "b2ebad01df2a319d259c2d3f61eb40c5",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "b2ebad01df2a319d259c2d3f61eb40c5",
    },
    {
      name: "ice cream",
      icon: <MdOutlineIcecream />,
      id: "b2ebad01df2a319d259c2d3f61eb40c5",
    },
  ]);
  const handleClick = (name, id) => {
    setActive(name);
  };

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => {
          <div
            onClick={() => handleClick(item.name, item.id)}
            key={index}
            className={`tablist ${active === item.name ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>;
        })}
      </div>
      <div className="recipe_banner">
        <div className="left-col">
          <span className="badge">Italian</span>
          <h1>White Pizza</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>Food52</small>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredients">
            <ul>
              <li>
                <GiCheckMark />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-col">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
