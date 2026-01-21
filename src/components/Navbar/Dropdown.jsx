import DropdownItem from "./DropdownItem";

function Dropdown({ title, items }) {
  return (
    <div className="dropdown">
      <button className="dropdown-btn">{title}</button>
      <div className="dropdown-content">
        {items.map((item) => (
          <DropdownItem
            key={item.text}
            text={item.text}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;