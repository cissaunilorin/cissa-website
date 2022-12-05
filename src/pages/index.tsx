import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { FC } from 'react';
import About from '../components/Home/About/About';
import Blog from '../components/Home/Blog/Blog';
import ContactDetails from '../components/Home/ContactDetails/ContactDetails';
import Event from '../components/Home/Event/Event';
import Facts from '../components/Home/Facts/Facts';
import Gallery from '../components/Home/Gallery/Gallery';
import Map from '../components/Home/Map/Map';
import Overview from '../components/Home/Overview/Overview';
import Recourses from '../components/Home/Recourses/Recourses';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CIS - home</title>
      </Head>

      <Overview />
      <Facts />
      <About />
      <Recourses />
      <ContactDetails />
      <Blog />
      <Event />
      <Gallery />
      <Map />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  // console.log(session?.user);

  return {
    props: {},
  };
};

export default Home;
