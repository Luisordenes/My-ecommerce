import { ImageStatus } from "../index";
import "./Card.css";

function Card(props) {

    return <>
        <div style={{ border: "1px red solid"}}>

            <div className="image-container">
            <ImageStatus isSoldOut={true} isSale={true}/>
            </div>

            <p>{props.titulo}</p>
            <p>{props.precio}</p>

        </div>
    </>
}
export default Card;