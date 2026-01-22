import "./Dropdown.css";

function DropdownItem({ text, onClick, isActive }) {
  return (
    <span
      className={`dropdown-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

export default DropdownItem;
