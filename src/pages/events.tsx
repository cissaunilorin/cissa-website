import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  PreviewData,
  InferGetServerSidePropsType,
} from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Box, Flex, Text } from '@chakra-ui/react';
import Card from '../components/Home/Event/Card';

import { mainBoxStyle } from '../styles/common';

import { ParsedUrlQuery } from 'querystring';
import { prisma } from '../server/lib/prisma';
import { useRouter } from 'next/router';

const EventsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ events }) => {
  return (
    <>
      <Head>
        <title>Events - CISSA</title>
      </Head>

      {events.length > 0 && (
        <Box {...mainBoxStyle} my={'120px'}>
          <Flex wrap={'wrap'} gap={'20px 10px'} justify={'center'}>
            {events?.map((event) => (
              <Card {...event} key={event.id} />
            ))}
          </Flex>
        </Box>
      )}

      {events.length === 0 && (
        <Box {...mainBoxStyle} mb='200px' mt='250px'>
          <Text textAlign={'center'} fontSize={'4xl'}>
            No Content
          </Text>
        </Box>
      )}
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

export default EventsPage;
