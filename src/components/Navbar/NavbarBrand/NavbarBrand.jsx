import { Link } from "react-router";
import  Logo  from "../../Logo/Logo";

function NavbarBrand() {
  return (
    <div className="navbar-brand">
      <Logo size={60} />
      <Link to="/">
        <h1 className="navbar-title">DigiMercado</h1>
      </Link>      
    </div>
  );
}

export default NavbarBrand;