import "./ImageStatus.css";

function ImageStatus(props) {
  return (
    <div>
      <img className="image-border" src={props.imageURL} alt="Producto" />

      {props.isSale && (
        <div className="descuento-overlay">
          <div className="descuento-tip">
            -{Math.floor(props.descuento)}%
          </div>
        </div>
      )}

      {props.isSoldOut && (
        <div className="agotado-overlay">
          <div className="agotado-tip">AGOTADO</div>
        </div>
      )}
    </div>
  );
}

export default ImageStatus;
