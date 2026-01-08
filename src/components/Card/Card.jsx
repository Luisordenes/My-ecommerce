import { ImageStatus } from "../index";
import "./Card.css";

function Card(props) {

    return <>
        <div className="card-container">
            <div className="image-container">
                <ImageStatus isSoldOut={props.isSoldOut} isSale={props.isSale} imageURL={props.imageURL}/>
            </div>
            <p>{props.titulo}</p>
            <p>{props.precio}</p>
        </div>
    </>
}
export default Card;