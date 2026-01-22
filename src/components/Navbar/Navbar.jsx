import "./Navbar.css";
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import Dropdown from "./Dropdown/Dropdown";
import SearchBar from "./Search/SearchBar";
import Button from "./Button/Button";
import { Link } from "react-router";

function Navbar({
  onSelectCategory,
  onSearch,
  onShowSales,
  categories = [],
}) {
  return (
    <nav className="navbar">
      <NavbarBrand />

      <div className="navbar-menu">
        <Link to="/product-list">
          <Button text="Productos" />
        </Link>

        <Dropdown
          title="Categorías"
          items={[
            { text: "Todas", onClick: () => onSelectCategory("") },
            ...categories.map((category) => ({
              text: category,
              onClick: () => onSelectCategory(category),
            })),
          ]}
        />

        <Button
          text="🔥 Ofertas"
          className="ofertas-btn"
          onClick={onShowSales}
        />
      </div>

      <div className="navbar-actions">
        <SearchBar onSearch={onSearch} />
        <Button text="👤" className="icon-btn" />
        <Button text="🛒" className="icon-btn" />
      </div>
    </nav>
  );
}

export default Navbar;
