function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      className="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
