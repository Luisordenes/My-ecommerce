import "./Navbar.css";

function Navbar({ onShowSales, onSearch, onSelectConsole, onSelectCategory }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">DigiGames</h1>

      <div className="navbar-menu">

        <div className="dropdown">
        <button className="dropdown-btn">Consolas</button>
        <div className="dropdown-content">
          <span onClick={() => onSelectConsole("")}>Todos</span>
          <span onClick={() => onSelectConsole("Play 4")}>Play 4</span>
          <span onClick={() => onSelectConsole("Play 5")}>Play 5</span>
        </div>
        </div>

        <div className="dropdown">
        <button className="dropdown-btn">Categorías</button>
        <div className="dropdown-content">
          <span onClick={() => onSelectCategory("")}>Todas</span>
          <span onClick={() => onSelectCategory("Aventura")}>Aventura</span>
          <span onClick={() => onSelectCategory("Accion")}>Acción</span>
          <span onClick={() => onSelectCategory("Deporte")}>Deporte</span>
        </div>
        </div>

        <button className="ofertas-btn" onClick={onShowSales}>
          🔥 Ofertas
        </button>
      </div>

      <div className="navbar-actions">

        <input
        type="text"
        placeholder="Buscar juegos..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
        />

        <button className="icon-btn">👤</button>
        <button className="icon-btn">🛒</button>
      </div>
    </nav>
  );
}

export default Navbar;
