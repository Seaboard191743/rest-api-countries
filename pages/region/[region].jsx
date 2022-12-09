import { CardList } from '../../components/cardList/CardList';
import { getAllCountriesByRegion } from '../../utils/endPoints';
import { useSelector } from 'react-redux';
import { getCountryName } from '../../slices/searchSlice';
import { filterData } from '../../utils/filterData';

export const getServerSideProps = async (context) => {
  const { params } = context;
  const response = await fetch(getAllCountriesByRegion(params.region));
  const result = await response.json();
  if (!result) {
    return {
      notFound: true,
    };
  }
  const data = result.map((item) => ({
    name: item.name,
    population: item.population,
    region: item.region,
    capital: item.capital ? item.capital[0] : null,
    flag: item.flags ? item.flags.png : null,
  }));

  return {
    props: {
      data,
    },
  };
};

const CardListByRegion = ({ data }) => {
  const country = useSelector(getCountryName);
  return <CardList list={filterData(data, country)} />;
};

export default CardListByRegion;
