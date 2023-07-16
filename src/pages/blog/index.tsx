import { FC } from 'react';
import { IoMdOptions } from 'react-icons/io';
import {
  Text,
  Box,
  BoxProps,
  Heading,
  Input,
  Flex,
  Button,
  Grid,
  GridItem,
  IconButton,
  Avatar,
} from '@chakra-ui/react';

import ChakraNextImage from '../../components/chakra-nextimage';
import {
  blogHeaderContainer,
  blogComponentsContainer,
  blogHeaderHeading,
  blogHeaderSummary,
  blogPrimaryHeading,
  blogSecondaryHeading,
  blogSmText,
  blogTrendingDDText,
  blogTrendingHeading,
} from '../../styles/pages/blog';
import { mainBoxStyle } from '../../styles/common';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { prisma } from '../../server/lib/prisma';
import { useRouter } from 'next/router';

const blogBtns = [
  {
    variant: 'dark',
    text: 'All',
  },
  {
    variant: 'outline',
    text: 'Design',
  },
  {
    variant: 'outline',
    text: 'Fashion',
  },
  {
    variant: 'outline',
    text: 'Development',
  },
  {
    variant: 'outline',
    text: 'Latest Gist',
  },
];

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blogs }) => {
  const router = useRouter();
  return (
    <>
      <Box {...blogHeaderContainer}>
        <Box {...mainBoxStyle}>
          <Box
            textAlign={'center'}
            maxWidth={'702px'}
            marginX='auto'
            marginY={0}>
            <Heading {...blogHeaderHeading}>Welcome to CIS Blog</Heading>
            <Text {...blogHeaderSummary}>
              Here we provide you with over 100+ resources curated by our
              students,cutting through different niche from technology to
              fashion
            </Text>

            <Flex maxW={'435px'} mx='auto'>
              <Input placeholder='Search' />
              <IconButton
                variant={'dark'}
                aria-label='Search database'
                marginLeft={'-40px'}
                icon={<IoMdOptions size={24} />}
              />
            </Flex>
            <Flex
              align={'center'}
              justifyContent={'center'}
              gap={'20px'}
              flexWrap={'wrap'}
              mt={'50px'}>
              {blogBtns.map((blogBtn, i) => (
                <Button variant={blogBtn.variant} key={i}>
                  {blogBtn.text}
                </Button>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
      {blogs && blogs[0] && blogs.length > 0 && (
        <Box {...blogComponentsContainer}>
          <Box {...mainBoxStyle}>
            <Heading {...blogPrimaryHeading}>Trending</Heading>
            <Flex
              gap={'13px 23px'}
              mt={'50px'}
              flex={1}
              align={{ lg: 'center' }}
              onClick={() => router.push(`/blog/${blogs[0].slug}`)}
              direction={{ base: 'column', lg: 'row' }}
              cursor={'pointer'}>
              <ChakraNextImage
                src={blogs[0].imageUrl || ''}
                h={'472.23px'}
                w={{ base: '100%', md: '100%', lg: '664px' }}
                borderRadius={'8px'}
              />

              <Box pt={{ base: '50px', lg: 'unset' }} flex={2}>
                <Heading {...blogSecondaryHeading}>
                  {blogs[0].blogTag[0].tag.title}
                </Heading>
                <Text {...blogTrendingHeading}>{blogs[0].heading}</Text>
                <Flex gap={'8px'} alignItems={'center'}>
                  <Avatar h={'35px'} w={'35px'} name={blogs[0].author.name} />
                  <Text {...blogSmText}>By {blogs[0].author.name}</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      )}
      {blogs && blogs.length > 0 && (
        <Box {...blogComponentsContainer}>
          <Box {...mainBoxStyle} mb='50px'>
            <Flex wrap='wrap' gap='30px' justify={'center'}>
              {blogs.map((blogPost, i) => (
                <Box flex='0 0 300px' key={i} w='100%'>
                  <ChakraNextImage
                    src={blogPost.imageUrl}
                    borderRadius={'8px'}
                    h={'273px'}
                    w={'100'}
                    mb={'24px'}
                  />
                  <Heading {...blogSecondaryHeading}>
                    {blogPost.blogTag[0].tag.title}
                  </Heading>
                  <Text {...blogTrendingHeading}>{blogPost.heading}</Text>
                  <Flex gap={'8px'} alignItems={'center'}>
                    <Avatar h={'35px'} w={'35px'} name={blogPost.author.name} />
                    <Text {...blogSmText}>By {blogPost.author.name}</Text>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      )}

      {blogs.length === 0 && (
        <Box {...mainBoxStyle} mb='200px' mt='150px'>
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
  const blogRes = await prisma.blog.findMany({
    where: { published: true, draft: false },
    include: { author: true, blogTag: { include: { tag: true } } },
    orderBy: { createdAt: 'desc' },
  });

  const tagRes = await prisma.tag.findMany();

  const blogs: Readonly<typeof blogRes> = JSON.parse(JSON.stringify(blogRes));
  const tags: Readonly<typeof tagRes> = JSON.parse(JSON.stringify(tagRes));

  return {
    props: {
      blogs,
      tags,
    },
  };
};

export default Blog;
