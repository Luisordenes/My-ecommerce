import "./ButtonFooter.css";
import { useState } from "react";

function ButtonFooter({ text, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick(text);
  };

  return (
    <button
      className={`footer-button ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default ButtonFooter;

