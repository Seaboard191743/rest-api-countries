import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { selectBoxIsOpened, toggleSelectBox } from '../../slices/regionSlice';
import { isDarkMode } from '../../slices/themeSlice';
import Image from 'next/image';

export const SelectBox = () => {
  const isOpened = useSelector(selectBoxIsOpened);
  const dispatch = useDispatch();
  const darkMode = useSelector(isDarkMode);

  const handleClickSelectBox = () => {
    dispatch(toggleSelectBox());
  };

  return (
    <div className={`selectbox`}>
      <div
        className={`selectbox-header${darkMode.suffix}`}
        onClick={handleClickSelectBox}
      >
        <span>Filter by Region</span>
        <Image
          src={darkMode.suffix ? '/dropdown-dark-theme.svg' : '/dropdown.svg'}
          alt='dropdown'
          width={9}
          height={5.55}
          style={{
            transform: isOpened ? 'rotate(180deg)' : null,
            transition: 'transform 0.1s',
          }}
        />
      </div>
      <div
        className={
          isOpened
            ? `selectbox-body${darkMode.suffix} selectbox-body-active`
            : `selectbox-body${darkMode.suffix}`
        }
      >
        <Link href='/region/africa' onClick={handleClickSelectBox}>
          Africa
        </Link>
        <Link href='/region/america' onClick={handleClickSelectBox}>
          America
        </Link>
        <Link href='/region/asia' onClick={handleClickSelectBox}>
          Asia
        </Link>
        <Link href='/region/europe' onClick={handleClickSelectBox}>
          Europe
        </Link>
        <Link href='/region/oceania' onClick={handleClickSelectBox}>
          Oceania
        </Link>
      </div>
    </div>
  );
};
