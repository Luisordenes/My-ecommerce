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
    <div id="root">
      <Navbar
        onShowSales={() => setShowOnlySales(!showOnlySales)}
        onSearch={setSearch}
        onSelectConsole={setConsoleSelected}
        onSelectCategory={setCategorySelected}
      />

      <main className="main-content">
        <div className="container">
          {filteredGames.length === 0 && search ? (
            <p className="empty-message">
              No se encontraron juegos para tu búsqueda 😢
            </p>
          ) : (
            filteredGames.map((game) => <Card key={game.id} {...game} />)
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
