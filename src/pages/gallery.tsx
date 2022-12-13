import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Events, Overview } from '../components/Gallery';

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>CIS - home</title>
      </Head>

      <Overview />
      <Events />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  // console.log(session.user);

  return {
    props: {},
  };
};

export default Gallery;
