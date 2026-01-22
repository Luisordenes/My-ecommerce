import React, { useEffect, useState } from "react";
import { Card, Navbar, Footer } from "../../components";
import { filterByCategory, filterBySearch } from "../../utils/filters";
import LoadingGif from "../../assets/gifs/loading.gif";
import "./ProductList.css";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [search, setSearch] = useState("");
  const [showOnlySales, setShowOnlySales] = useState(false);

  const categories = [...new Set(data.map((product) => product.category))];

  let filteredByCategory = filterByCategory(data, categorySelected);
  let filteredProducts = filterBySearch(filteredByCategory, search);

  if (showOnlySales) {
    filteredProducts = filteredProducts.filter(
      (p) => p.discountPercentage > 15
    );
  }

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      setData(json.products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar
        onSelectCategory={setCategorySelected}
        onSearch={setSearch}
        onShowSales={() => setShowOnlySales((prev) => !prev)}
        categories={categories}
        categorySelected={categorySelected}
        showOnlySales={showOnlySales}
      />

      <main className="main-content">
        {loading && <img src={LoadingGif} alt="Loading..." />}

        {error && !loading && <h1>{error.message}</h1>}

        {!loading && data.length === 0 && <h1>La data está vacía</h1>}

        {!loading && data.length > 0 && (
          <div className="container">
            {filteredProducts.length === 0 ? (
              <p className="empty-message">No se encontraron productos 😢</p>
            ) : (
              filteredProducts.map((prd) => (
                <Card
                  key={prd.id}
                  titulo={prd.title}
                  precio={prd.price}
                  imageURL={prd.images[0]}
                  descuento={prd.discountPercentage}
                  stock={prd.stock}
                />
              ))
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductList;
