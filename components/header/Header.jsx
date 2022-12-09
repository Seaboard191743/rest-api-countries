import { useSelector, useDispatch } from 'react-redux';
import { isDarkMode, switchThemeMode } from '../../slices/themeSlice';

import Image from 'next/image';
import { Container } from '../Container';

export const Header = () => {
  const darkMode = useSelector(isDarkMode);
  const dispatch = useDispatch();

  return (
    <header className={`header${darkMode.suffix}`}>
      <Container>
        <nav className='navigation'>
          <h1 className='title'>Where in the world?</h1>
          <div
            className='theme-context'
            onClick={() => dispatch(switchThemeMode())}
          >
            <Image
              src='/theme-icon-dark.svg'
              width={15}
              height={13.75}
              alt='navbrand'
            />
            <span className='theme-name'>
              {darkMode.isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </div>
        </nav>
      </Container>
    </header>
  );
};
