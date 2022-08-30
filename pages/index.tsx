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

const Home: FC = () => {
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

export default Home;
