import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import { heading2Style, mainBoxStyle } from '../../styles/common';
import { Text, Flex, Box, Heading, Link } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';
import { leaderLink } from '../../styles/pages/about';
import ChakraNextImage from '../../components/chakra-nextimage';
import { ParsedUrlQuery } from 'querystring';
import { prisma } from '../../server/lib/prisma';
import Head from 'next/head';

const excosMembers: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  return (
    <>
      <Head>
        <title>{user?.user.name} - CISSA</title>
      </Head>

      <Box {...mainBoxStyle} my='150px'>
        <Flex flexDirection='column'>
          <Flex
            alignItems='center'
            flexDirection={['column', 'column', 'row']}
            gap='1rem 5rem'>
            <ChakraNextImage
              flex='0 0 300px'
              css={{ aspectRatio: '1/1' }}
              src={user?.imageUrl || ''}
              borderRadius='10px'
            />
            <Box>
              <Box>
                <Heading {...heading2Style} fontSize='30px'>
                  {user?.user.name}
                </Heading>
                <Text color='#B4A097' fontSize='20px' fontWeight='600'>
                  {user?.position}
                </Text>
              </Box>
              <Flex mt='.7rem' gap='.6rem'>
                {/* <Link {...leaderLink} bg='none' border='1px solid #814226'>
                <RiFacebookFill size='16px' color='#814226' />
              </Link>
              <Link {...leaderLink} bg='none' border='1px solid #814226'>
                <FaTwitter size='16px' color='#814226' />
              </Link>
              <Link {...leaderLink} bg='none' border='1px solid #814226'>
                <RiLinkedinFill size='16px' color='#814226' />
              </Link> */}
              </Flex>
            </Box>
          </Flex>
          <Box mt='2rem'>
            <Text fontSize='27px' mb='.3rem' fontWeight='600'>
              About
            </Text>
            <Text
              w='100%'
              fontSize='18px'
              color='#676767'
              dangerouslySetInnerHTML={{ __html: user?.description || '' }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const id = ctx.query['id'] as string;

  const user = await prisma.executive.findUnique({
    include: { user: true },
    where: { id },
  });

  return {
    props: {
      user,
    },
  };
};

export default excosMembers;
