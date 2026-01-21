import  Logo  from "../Logo/Logo";

function NavbarBrand() {
  return (
    <div className="navbar-brand">
      <Logo size={60} />
      <h1 className="navbar-title">DigiGames</h1>
    </div>
  );
}

export default NavbarBrand;