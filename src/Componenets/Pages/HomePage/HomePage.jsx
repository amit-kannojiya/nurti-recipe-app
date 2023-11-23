import React from "react";

import Header from "../../../Componenets/Header/Header";
import Tabs from "../../../Componenets/Tabs/Tabs";
import RecipeLists from "../../../Componenets/RecipeLIsts/RecipeLists";

function HomePage() {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists />
    </div>
  );
}

export default HomePage;
