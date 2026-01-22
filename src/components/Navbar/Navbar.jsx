import "./Navbar.css";
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import Dropdown from "./Dropdown/Dropdown";
import SearchBar from "./Search/SearchBar";
import Button from "./Button/Button";
import { Link, useLocation } from "react-router";

function Navbar({
  onSelectCategory,
  onSearch,
  onShowSales,
  categories = [],
  categorySelected,
  showOnlySales,
}) {
  const location = useLocation();
  const isProductList = location.pathname === "/product-list";

  return (
    <nav className="navbar">
      <NavbarBrand />

      <div className="navbar-menu">
        <Link to="/product-list">
          <Button text="Productos" className="productos-btn" />
        </Link>
        {isProductList && (
          <div className="navbar-filters">
            <Dropdown
              title="Categorías"
              activeItem={categorySelected || "Todas"}
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
              className={`ofertas-btn ${showOnlySales ? "active" : ""}`}
              onClick={onShowSales}
            />
            <SearchBar onSearch={onSearch} />
          </div>
        )}

        <div className="navbar-actions">
          <Button text="👤" className="icon-btn" />
          <Button text="🛒" className="icon-btn" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
