import Head from 'next/head';
import Navbar from '../components/Navbar';
import PopularMovies from '../components/PopularMovies';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nontonku - Platform Nonton Film Terbaik di Indonesia</title>
        <meta name="description" content="Nontonku adalah platform streaming film terbaik di Indonesia dengan berbagai pilihan film lokal dan internasional. Tonton sekarang!" />
      </Head>
      <Navbar />
      <PopularMovies />
    </div>
  );
}
