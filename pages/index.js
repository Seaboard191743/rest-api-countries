import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../utils/endPoints';
import { fetchData } from '../slices/countriesSlice';
import { getCountryName } from '../slices/searchSlice';
import { store } from '../store/store';

import { CardList } from '../components/cardList/CardList';
import { filterData } from '../utils/filterData';

export const getStaticProps = async () => {
  await store.dispatch(fetchData(getAllCountries()));
  return {
    props: { initialState: store.getState().countries },
  };
};

export default function Home({ initialState }) {
  const country = useSelector(getCountryName);
  return (
    <>
      {initialState.isLoading && <h1>Loading</h1>}
      {initialState.data && (
        <CardList list={filterData(initialState.data, country)} />
      )}
    </>
  );
}
