export const filterData = (data, country) => {
  return data.filter((item) =>
    item.name.common.toLowerCase().startsWith(country.country.toLowerCase())
  );
};
