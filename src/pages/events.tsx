import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Card from '../components/Home/Event/Card';
import { EventProps } from '../components/Home/Event/styles';
import { mainBoxStyle } from '../styles/common';

const events: EventProps[] = [
  {
    id: 1,
    mainImage: '/assets/events-1.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
  {
    id: 2,
    mainImage: '/assets/events-2.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: true,
  },
  {
    id: 3,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
  {
    id: 4,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
  {
    id: 5,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
  {
    id: 6,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
];

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>CIS - home</title>
      </Head>

      <Box {...mainBoxStyle} my={'120px'}>
        <Flex wrap={'wrap'} gap={'20px 10px'} justify={'center'}>
          {events?.map((event) => (
            <Card {...event} key={event.id} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  // console.log(session.user);

  return {
    props: {},
  };
};

export default Gallery;
