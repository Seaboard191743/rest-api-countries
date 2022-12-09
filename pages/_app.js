import { Layout } from '../components/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';
import '../components/header/header.css';
import '../components/filterComponent/filter.css';
import '../components/card/card.css';
import '../components/layout.css';
import './country/country.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
