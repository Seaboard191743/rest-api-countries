import { useSelector, useDispatch } from 'react-redux';
import { setCountryName } from '../slices/searchSlice';
import { useRouter } from 'next/router';
import { Header } from './header/Header';
import { FilterComponent } from './filterComponent/FilterComponent';
import { isDarkMode } from '../slices/themeSlice';

export const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const darkMode = useSelector(isDarkMode);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCountryName({ country: value }));
  };
  return (
    <>
      <Header />
      {!pathname.startsWith('/country/') ? (
        <FilterComponent onChange={handleChange} />
      ) : null}
      <div className={`layout${darkMode.suffix}`}>{children}</div>
    </>
  );
};
