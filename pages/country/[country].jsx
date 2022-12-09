import { getAllCountries } from '../../utils/endPoints';
import { getCountryByName } from '../../utils/endPoints';
import { useSelector } from 'react-redux';
import { isDarkMode } from '../../slices/themeSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../../components/Container';

export async function getServerSideProps({ query }) {
  const response = await fetch(getCountryByName(query.country));
  const country = await response.json();

  if (!country) {
    return {
      notFound: true,
    };
  }

  return {
    props: { country: country[0] },
  };
}

const CountryPage = ({ country }) => {
  const darkMode = useSelector(isDarkMode);
  const router = useRouter();
  console.log(country);
  return (
    <Container>
      <div className='country-container'>
        <Link className={`back-link${darkMode.suffix}`} href='/'>
          <Image
            src={darkMode.suffix === 'dark' ? '/back-light.svg' : '/back.svg'}
            width={20}
            height={20}
            alt='back'
          />{' '}
          Back
        </Link>
        <div className='country'>
          <div className='country-flag'>
            <Image
              src={country.flags.png}
              height={401}
              width={560}
              alt={`${country.name.common} flag`}
            />
          </div>
          <div className={`country-description${darkMode.suffix}`}>
            <h1>{country.name.common}</h1>
            <div className='country-description-column'>
              <p>
                <span>Native name:</span>
                {
                  country.name.nativeName[Object.keys(country.languages)[0]]
                    .common
                }
              </p>
              <p>
                <span>Population:</span>
                {country.population.toLocaleString('en-US')}
              </p>
              <p>
                <span>Region:</span>
                {country.region}
              </p>
              <p>
                <span>Sub Region:</span>
                {country.subregion}
              </p>
              <p>
                <span>Capital:</span>
                {country.capital}
              </p>
            </div>
            <div className='country-description-column'>
              <p>
                <span>Top Level Domain:</span>
                {country.tld.join(', ')}
              </p>
              <p>
                <span>Currencies:</span>
                {country.currencies[Object.keys(country.currencies)[0]].name}
              </p>
              <p>
                <span>Languages:</span>{' '}
                {Object.values(country.languages).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountryPage;
