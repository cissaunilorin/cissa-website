import { Box } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { mainBoxStyle } from '../styles/common';

const Write: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  return (
    <>
      <Head>
        <title>CIS - write</title>
      </Head>

      <Box {...mainBoxStyle} my='100px'></Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  return {
    props: {},
  };
};

export default Write;
