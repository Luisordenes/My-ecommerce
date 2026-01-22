export function filterByCategory(products, category) {
  if (!category) return products;
  return products.filter(
    (product) => product.category === category
  );
}

export function filterBySearch(products, search) {
  if (!search) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
}

