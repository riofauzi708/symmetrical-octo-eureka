import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nontonku - Platform Nonton Film Terbaik di Indonesia</title>
        <meta name="description" content="Nontonku adalah platform streaming film terbaik di Indonesia dengan berbagai pilihan film lokal dan internasional. Tonton sekarang!"></meta>
        <meta name="keywords" content="nonton film, streaming film, film Indonesia, film populer, Nontonku"></meta>
        <meta name="author" content="Nontonku Team"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
