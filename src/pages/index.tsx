import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
// import { getSession } from 'next-auth/react';
import Head from 'next/head';
// import Alumni from '../components/Home/Alumni';
import Blog from '../components/Home/Blog/Blog';
import About from './../components/Home/About/About';
import ContactDetails from '../components/Home/ContactDetails/ContactDetails';
import Events from '../components/Home/Event/Event';
import Facts from '../components/Home/Facts/Facts';
// import Gallery from '../components/Home/Gallery/Gallery';
// import Map from '../components/Home/Map/Map';
import Overview from '../components/Home/Overview/Overview';
import Recourses from '../components/Home/Recourses/Recourses';
import { ParsedUrlQuery } from 'querystring';
// import { trpc } from '../utils/trpc';
import { prisma } from '../server/lib/prisma';

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ events }) => {
  return (
    <>
      <Head>
        <title>CISSA - Home</title>
      </Head>

      <Overview />
      <Facts />
      <About />
      <Recourses />
      <ContactDetails />
      <Blog />
      {events.length > 0 && <Events events={events} />}
      {/* <Alumni /> */}
      {/* <Gallery /> */}
      {/* <Map /> */}
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const eventsRes = await prisma.event.findMany();

  const events: typeof eventsRes = JSON.parse(JSON.stringify(eventsRes));

  return {
    props: {
      events,
    },
  };
};

export default Home;
