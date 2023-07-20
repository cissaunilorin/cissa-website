import { Box, Flex } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { mainBoxStyle } from '../styles/common';
import { prisma } from '../server/lib/prisma';
import { getServerAuthSession } from '../server/common/get-server-auth-session';
import { Session } from 'next-auth';
import AuthorDetails from '../components/Author/Author-Details/Author-Details';
import AuthorBlog from '../components/Author/Author-Blog/Author-Blog';

const Author: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blogs, user }) => {
  return (
    <>
      <Head>
        <title>Author - CISSA</title>
      </Head>

      <Box {...mainBoxStyle}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <AuthorBlog blogs={blogs} />
          <Box flex='0 0 2px' bgColor={'#eee'} />
          <AuthorDetails user={user} />
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const session = await getServerAuthSession(ctx);
  const blogRes = await prisma.blog.findMany({
    where: { authorId: session?.user.id },
  });

  const blogs: typeof blogRes = JSON.parse(JSON.stringify(blogRes));
  const user: Session['user'] = JSON.parse(JSON.stringify(session?.user));

  return {
    props: {
      blogs,
      user,
    },
  };
};

export default Author;
