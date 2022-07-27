import type { NextPage } from 'next';
import Head from 'next/head';
import HeroBanner from '../components/Home/HeroBanner';

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book Store</title>
        <meta name="description" content="Created by althafdaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroBanner />
    </>
  );
};

export default Home;
