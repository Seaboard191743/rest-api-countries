import { useSelector } from 'react-redux';
import { getCountryName } from '../../slices/searchSlice';
import { isDarkMode } from '../../slices/themeSlice';

export const SearchBar = ({ onChange, mode }) => {
  // const [country, setCountry] = useState({ name: '' });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCountry({ [name]: value });
  // };
  const country = useSelector(getCountryName);
  const darkMode = useSelector(isDarkMode);

  return (
    <input
      type='text'
      className={`search${darkMode.suffix}`}
      name='country'
      placeholder='Search for a country...'
      onChange={onChange}
      value={country.name}
    />
  );
};
