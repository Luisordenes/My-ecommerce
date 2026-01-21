import "./Navbar.css";
import NavbarBrand from "./NavbarBrand";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

function Navbar({
  onShowSales,
  onSearch,
  onSelectConsole,
  onSelectCategory,
}) {
  return (
    <nav className="navbar">
      <NavbarBrand />

      <div className="navbar-menu">
        <Dropdown
          title="Consolas"
          items={[
            { text: "Todos", onClick: () => onSelectConsole("") },
            { text: "Play 4", onClick: () => onSelectConsole("Play 4") },
            { text: "Play 5", onClick: () => onSelectConsole("Play 5") },
          ]}
        />

        <Dropdown
          title="Categorías"
          items={[
            { text: "Todas", onClick: () => onSelectCategory("") },
            { text: "Aventura", onClick: () => onSelectCategory("Aventura") },
            { text: "Acción", onClick: () => onSelectCategory("Accion") },
            { text: "Deporte", onClick: () => onSelectCategory("Deporte") },
          ]}
        />

        <button className="ofertas-btn" onClick={onShowSales}>
          🔥 Ofertas
        </button>
      </div>

      <div className="navbar-actions">
        <SearchBar onSearch={onSearch} />
        <button className="icon-btn">👤</button>
        <button className="icon-btn">🛒</button>
      </div>
    </nav>
  );
}

export default Navbar;
