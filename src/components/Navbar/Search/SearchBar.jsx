import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      className="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

