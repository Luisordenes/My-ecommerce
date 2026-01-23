import React, { useEffect, useState } from "react";
import {
  Navbar,
  Footer,
  ProductsState,
  ProductGrid,
} from "../../components/index";
import "./ProductList.css";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import { getProducts } from "../../services/productsService";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [search, setSearch] = useState("");
  const [showOnlySales, setShowOnlySales] = useState(false);
  const categories = [...new Set(data.map((product) => product.category))];
  const filteredProducts = useFilteredProducts({
    products: data,
    categorySelected,
    search,
    showOnlySales,
  });

  const loadProducts = async () => {
    try {
      const products = await getProducts();
      setData(products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
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
        <ProductsState
          loading={loading}
          error={error}
          isEmpty={!loading && data.length === 0}
        />

        {!loading && data.length > 0 && (
          <div className="container">
            <ProductGrid products={filteredProducts} />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductList;
