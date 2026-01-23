import Card from "../Card/Card";

function ProductGrid({ products }) {
  if (products.length === 0) {
    return <p className="empty-message">No se encontraron productos 😢</p>;
  }

  return (
    <div className="container">
      {products.map((prd) => (
        <Card
          key={prd.id}
          titulo={prd.title}
          precio={prd.price}
          imageURL={prd.images[0]}
          descuento={prd.discountPercentage}
          stock={prd.stock}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
