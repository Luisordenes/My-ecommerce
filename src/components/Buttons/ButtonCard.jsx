import { useState } from "react";
import "./ButtonCard.css";

function ButtonCard({ disabled = false }) {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    if (!disabled) setQuantity(prev => prev + 1);
  };
  const decrement = () => {
    if (!disabled && quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className={`card-button ${disabled ? "disabled" : ""}`}>
      <div className="quantity-control">
        <button onClick={decrement} disabled={disabled}>−</button>
        <span>{quantity}</span>
        <button onClick={increment} disabled={disabled}>+</button>
      </div>

      <button className="add-to-cart" disabled={disabled}>
        Agregar
      </button>
    </div>
  );
}

export default ButtonCard;

