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

const excosMembers: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
  console.log(user);
  return (
    <Box {...mainBoxStyle} my="150px">
      <Flex flexDirection="column">
        <Flex alignItems="center" flexDirection="row" gap="5rem">
          <ChakraNextImage
            w="100%"
            h="400px"
            src={'/assets/placeholder.png'}
            borderRadius="20px"
          />
          <Box w="100%">
            <Box>
              <Heading {...heading2Style} fontSize="30px">
                {user?.user.name}
              </Heading>
              <Text color="#B4A097" fontSize="20px" fontWeight="600">
                {user?.position}
              </Text>
            </Box>
            <Flex mt=".7rem" gap=".6rem">
              <Link {...leaderLink} bg="none" border="1px solid #814226">
                <RiFacebookFill size="16px" color="#814226" />
              </Link>
              <Link {...leaderLink} bg="none" border="1px solid #814226">
                <FaTwitter size="16px" color="#814226" />
              </Link>
              <Link {...leaderLink} bg="none" border="1px solid #814226">
                <RiLinkedinFill size="16px" color="#814226" />
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Box mt="2rem">
          <Text fontSize="27px" mb=".3rem" fontWeight="600">
            About
          </Text>
          <Text
            w="100%"
            fontSize="18px"
            color="#676767"
            dangerouslySetInnerHTML={{ __html: user?.description || '' }}
          />
        </Box>
      </Flex>
    </Box>
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
