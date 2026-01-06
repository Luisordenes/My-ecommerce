import game from "../../assets/images/Fifa26.jpeg";
import "./ImageStatus.css";

function ImageStatus(props) {

    return (
        <div> 
          <img className="image-border" src={game}></img>

          {props.isSale && (
            <div className="descuento-overlay">
            <div className="descuento-tip">45%</div>
            </div>
          )}

          {props.isSoldOut && (
            <div className="agotado-overlay">
            <div className="agotado-tip">AGOTADO</div>
            </div>
          )} 
        </div> 
    )
}

export default ImageStatus;