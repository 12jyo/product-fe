export const getProducts = async (
  page = 1,
  category,
  search,
  sortDirection,
  record = 8,
  ) => {
  const fetchResult = await fetch("http://localhost:3001/api/products?" + new URLSearchParams({
    page,
    record_limit: record,
    category,
    search,
    sort: sortDirection,
  }));
  const response = await fetchResult.json();

  if (response.status)
    return response.data;

  return null;
}
