import "./Dropdown.css";
import DropdownItem from "./DropdownItem";

function Dropdown({ title, items = [], activeItem }) {
  return (
    <div className="dropdown">
      <button className="dropdown-btn">{title}</button>
      <div className="dropdown-content">
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            text={item.text}
            onClick={item.onClick}
            isActive={item.text === activeItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
