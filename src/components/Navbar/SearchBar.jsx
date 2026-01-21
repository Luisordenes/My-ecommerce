function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar juegos..."
      className="search-input"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;