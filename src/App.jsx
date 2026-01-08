import "./App.css";
import { Card, Navbar, Footer } from "./components";
import { games } from "./data/games";
import { useState } from "react";
import {
  filterBySale,
  filterBySearch,
  filterByConsole,
  filterByCategory,
} from "./utils/filters";

function App() {
  const [showOnlySales, setShowOnlySales] = useState(false);
  const [search, setSearch] = useState("");
  const [consoleSelected, setConsoleSelected] = useState("");
  const [categorySelected, setCategorySelected] = useState("");

  let filteredGames = filterBySale(games, showOnlySales);
  filteredGames = filterBySearch(filteredGames, search);
  filteredGames = filterByConsole(filteredGames, consoleSelected);
  filteredGames = filterByCategory(filteredGames, categorySelected);

  return (
    <>
      <Navbar
        onShowSales={() => setShowOnlySales(!showOnlySales)}
        onSearch={setSearch}
        onSelectConsole={setConsoleSelected}
        onSelectCategory={setCategorySelected}
      />

      <div className="container">
        {filteredGames.map((game) => (
          <Card key={game.id} {...game} />
        ))}
      </div>

      <Footer/>
    </>
  );
}

export default App;



