export function filterBySale(games, showOnlySales) {
  if (!showOnlySales) return games;
  return games.filter((game) => game.isSale);
}

export function filterBySearch(games, search) {
  if (!search) return games;
  return games.filter((game) =>
    game.titulo.toLowerCase().includes(search.toLowerCase())
  );
}

export function filterByConsole(games, consoleSelected) {
  if (!consoleSelected) return games;
  return games.filter((game) => game.consola === consoleSelected);
}

export function filterByCategory(games, categorySelected) {
  if (!categorySelected) return games;
  return games.filter((game) => game.categoria === categorySelected);
}


