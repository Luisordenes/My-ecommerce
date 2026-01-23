import { filterByCategory, filterBySearch } from "../utils/filters";

export function useFilteredProducts({
  products,
  categorySelected,
  search,
  showOnlySales,
}) {
  let filtered = filterByCategory(products, categorySelected);
  filtered = filterBySearch(filtered, search);

  if (showOnlySales) {
    filtered = filtered.filter(
      (p) => p.discountPercentage > 15
    );
  }

  return filtered;
}
