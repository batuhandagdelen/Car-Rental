export const fetchCars = async (
  make: string,
  model: string,
  year: string,
  page: string,
  limit: number,
) => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=${limit}`;

  if (make) {
    url += `&refine=make:"${make}"`;
  }
  if (model) {
    url += `&refine=model:"${model}"`;
  }
  if (year) {
    url += `&refine=year:"${year}"`;
  }

  const offset = (Number(page) - 1) * limit;
  url += `&offset=${offset}`;
  const res = await fetch(url);

  const data = await res.json();

  return data;
};
