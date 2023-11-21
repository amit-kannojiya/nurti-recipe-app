import "./App.scss";
import Header from "./Componenets/Header/Header";
import Tabs from "./Componenets/Tabs/Tabs";
import RecipeLists from "./Componenets/RecipeLIsts/RecipeLists";

function App() {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists />
    </div>
  );
}

export default App;
