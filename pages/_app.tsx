import Layout from '../components/Layout';
import '../styles/globals.css';

const Vblinden = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Vblinden;
