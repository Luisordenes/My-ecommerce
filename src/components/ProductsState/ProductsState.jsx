import LoadingGif from "../../assets/gifs/loading.gif";
import "./ProductsState.css";

function ProductsState({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div className="products-state">
        <img src={LoadingGif} alt="Cargando productos..." />
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-state error">
        <h1>⚠️ Algo salió mal</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="products-state">
        <h1>No hay productos disponibles</h1>
        <p>Intenta nuevamente más tarde</p>
      </div>
    );
  }

  return null;
}

export default ProductsState;
