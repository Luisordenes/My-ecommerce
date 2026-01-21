function DropdownItem({ text, onClick }) {
  return <span onClick={onClick}>{text}</span>;
}

export default DropdownItem;