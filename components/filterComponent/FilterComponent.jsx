import { useSelector } from 'react-redux';
import { isDarkMode } from '../../slices/themeSlice';
import { Container } from '../Container';
import { SearchBar } from './SearchBar';
import { SelectBox } from './SelectBox';

export const FilterComponent = (props) => {
  const darkMode = useSelector(isDarkMode);
  return (
    <div className={`filter${darkMode.suffix}`}>
      <Container>
        <SearchBar {...props} />
        <SelectBox />
      </Container>
    </div>
  );
};
