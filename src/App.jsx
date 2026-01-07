import "./App.css";
import { Card } from "./components/index";
import { games } from "./data/games";

function App() {
  return (
    <>
      <div className="container">
        {games.map((game) => (
          <Card
            id={game.id}
            titulo={game.titulo}
            precio={game.precio}
            isSoldOut={game.isSoldOut}
            isSale={game.isSale}
            imageURL={game.imageURL}
          />
        ))}
      </div>
    </>
  );
}

export default App;
