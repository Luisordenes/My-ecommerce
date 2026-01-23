import "./ProductTitle.css";

function ProductTitle({ children }) {
  return <h3 className="product-title">{children}</h3>;
}

export default ProductTitle;