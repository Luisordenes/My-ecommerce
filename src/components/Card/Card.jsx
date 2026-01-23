import { ImageStatus, ButtonCard, ProductTitle, ProductPrice } from "../index";
import "./Card.css";

function Card(props) {
  const isSale = props.descuento > 15;
  const isSoldOut = props.stock < 10;

  return (
    <div className="card-container">
      <div className="image-container">
        <ImageStatus
          isSale={isSale}
          isSoldOut={isSoldOut}
          imageURL={props.imageURL}
          descuento={props.descuento}
        />
      </div>

      <ProductTitle>{props.titulo}</ProductTitle>
      <ProductPrice value={props.precio} />

      <ButtonCard disabled={isSoldOut} />
    </div>
  );
}

export default Card;


