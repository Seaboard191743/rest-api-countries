const BASIC_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = () => `${BASIC_URL}/all`;

export const getCountryByName = (name) => `${BASIC_URL}/name/${name}`;

export const getAllCountriesByRegion = (region) =>
  `${BASIC_URL}/region/${region}`;

export const getData = async (URL) => {
  const response = await fetch(URL);
  const data = response.json();
  return data;
};
