import { useSelector } from 'react-redux';
import { isDarkMode } from '../../slices/themeSlice';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Card = ({ name, flag, population, region, capital = name }) => {
  const darkMode = useSelector(isDarkMode);
  const router = useRouter();
  return (
    <section
      className={`card${darkMode.suffix}`}
      onClick={() => router.push(`/country/${name.common.toLowerCase()}`)}
    >
      <Image src={flag} width={264} height={160} alt='flag' />
      <div className='card-info'>
        <h2 className='name'>{name.common}</h2>
        <p>
          <span>Population:</span>
          {population.toLocaleString('en-US')}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capital:</span>
          {capital}
        </p>
      </div>
    </section>
  );
};
