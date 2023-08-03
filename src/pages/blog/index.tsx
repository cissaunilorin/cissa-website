import { FC, useState } from 'react';
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
import { useRouter } from 'next/router';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Head from 'next/head';

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blogs, tags, count, nextPage, page }) => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  console.log(nextPage);

  return (
    <>
      <Head>
        <title>Blog - CISSA</title>
      </Head>

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
              <Input
                placeholder='Search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <IconButton
                variant={'dark'}
                aria-label='Search database'
                marginLeft={'-40px'}
                onClick={() => {
                  if (query) router.replace(`/blog?query=${query}`);
                }}
                icon={<IoMdOptions size={24} />}
              />
            </Flex>
            <Flex
              align={'center'}
              justifyContent={'center'}
              gap={'20px'}
              flexWrap={'wrap'}
              mt={'50px'}>
              {tags.map((tag) => (
                <Button
                  variant={'outline'}
                  key={tag.id}
                  onClick={() => {
                    router.replace(`/blog?tagId=${tag.id}`);
                  }}>
                  {tag.title}
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
            <Flex wrap='wrap' gap='30px' mb='50px' justify={'center'}>
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

            <Flex
              {...mainBoxStyle}
              align='center'
              gap='20px'
              justify={'center'}>
              <IconButton
                aria-label='previous page'
                isDisabled={page === 1}
                onClick={() => {
                  router.replace(`/blog?page=${page - 1}`);
                }}
                icon={<ArrowLeftIcon />}
              />
              <IconButton
                aria-label='next page'
                isDisabled={!nextPage}
                onClick={() => {
                  router.replace(`/blog?page=${page + 1}`);
                }}
                icon={<ArrowRightIcon />}
              />
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
  const tagId = ctx.query['tagId'] as string;
  const query = ctx.query['query'] as string;
  const page = ctx.query['page'] as string;
  const pg = page ? +page : 1;

  const count = await prisma.blog.count({
    where: {
      published: true,
      draft: false,
      ...(tagId && { blogTag: { every: { tagId } } }),
      ...(query && { heading: { contains: query } }),
    },
    orderBy: { createdAt: 'desc' },
  });
  const blogRes = await prisma.blog.findMany({
    where: {
      published: true,
      draft: false,
      ...(tagId && { blogTag: { every: { tagId } } }),
      ...(query && { heading: { contains: query } }),
    },
    include: { author: true, blogTag: { include: { tag: true } } },
    orderBy: { createdAt: 'desc' },
    take: 20,
    skip: 20 * (pg - 1),
  });

  const tagRes = await prisma.tag.findMany();

  const blogs: typeof blogRes = JSON.parse(JSON.stringify(blogRes));
  const tags: typeof tagRes = JSON.parse(JSON.stringify(tagRes));

  return {
    props: {
      blogs,
      tags,
      count,
      page: pg,
      nextPage: count / pg > 20,
    },
  };
};

export default Blog;
