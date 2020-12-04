import Layout from '../src/component/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css';
import '../styles/swiper-bundle.min.css';
import '../styles/style.css';
import '../styles/responsive.css';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
