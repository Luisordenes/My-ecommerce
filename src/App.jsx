import "./App.css";
import { Navbar, Footer } from "./components/index";
import SaleGif from './assets/gifs/Sale.gif'

function App() {
  return (
    <div id="root">
      <Navbar />
      <main className="main-content">
        <img src={SaleGif} alt="SALE" className="sale-gif" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
