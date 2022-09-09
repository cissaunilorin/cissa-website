import { FC } from 'react';
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

const blogTending = [
  {
    heading: 'Trending',
    subHeading: 'Development',
    summary:
      'How to do the right thingwithout stress in an environment filled with different people,with different attitude',
  },
];
const blogPosts = [
  {
    img: '/assets/Mblogimg1.png',
    heading: 'Latest Gist',
    summary: 'The hustle and stress of the street of ilorin',
    face: '/assets/blogFace.png',
    name: 'By Rukayah Bisi',
  },
  {
    img: '/assets/Mblogimg2.png',
    heading: 'Fashion',
    summary: 'The advent of AI paving  and evolution of the web',
    face: '/assets/blogFace.png',
    name: 'By Rukayah Bisi',
  },
  {
    img: '/assets/Mblogimg3.png',
    heading: 'Design',
    summary: 'The hustle and stress of the street of ilorin',
    face: '/assets/blogFace.png',
    name: 'By Rukayah Bisi',
  },
  {
    img: '/assets/Mblogimg4.png',
    heading: 'Design',
    summary: 'The hustle and stress of the street of ilorin',
    face: '/assets/blogFace.png',
    name: 'By Rukayah Bisi',
  },
  {
    img: '/assets/Mblogimg5.png',
    heading: 'Design',
    summary: 'The hustle and stress of the street of ilorin',
    face: '/assets/blogFace.png',
    name: 'By Rukayah Bisi',
  },
  {
    img: '/assets/Mblogimg6.png',
    heading: "Apple's new emergency SOS TECH ",
    summary: 'Bro fuck andriods,apple is clear. lol bro dfkm',
    face: '/assets/blogFace.png',
    name: 'By Onazi daniel',
  },
];

const Blog: FC = () => {
  return (
    <>
      <Box {...blogHeaderContainer}>
        <Box {...mainBoxStyle}>
          <Box
            textAlign={'center'}
            maxWidth={'702px'}
            marginX="auto"
            marginY={0}
          >
            <Heading {...blogHeaderHeading}>Welcome to CIS Blog</Heading>
            <Text {...blogHeaderSummary}>
              Here we provide you with over 100+ resources curated by our
              students,cutting through different niche from technology to
              fashion
            </Text>

            <Flex w={'435px'} mx="auto">
              <Input placeholder="Search" />
              <Button variant={'dark'} marginLeft={'-55px'}>
                <ChakraNextImage
                  src={'assets/blogseV.png'}
                  h={'24px'}
                  w={'24px'}
                />
              </Button>
            </Flex>
            <Flex
              align={'center'}
              justifyContent={'center'}
              gap={'20px'}
              mt={'50px'}
            >
              {blogBtns.map((blogBtn, i) => (
                <Button variant={blogBtn.variant} key={i}>
                  {blogBtn.text}
                </Button>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box {...blogComponentsContainer}>
        <Box {...mainBoxStyle}>
          <Heading {...blogPrimaryHeading}>Trending</Heading>
          <Flex gap={'23px'} mt={'50px'}>
            <Box>
              <ChakraNextImage
                src={'/assets/trendingImg.png'}
                h={'472.23px'}
                w={'644px'}
                borderRadius={'8px'}
              />
            </Box>
            <Box pt={'100px'}>
              <Heading {...blogSecondaryHeading}>Development</Heading>
              <Text {...blogTrendingHeading}>{blogTending[0].summary}</Text>
              <Flex gap={'8px'} alignItems={'center'}>
                <ChakraNextImage
                  src={'/assets/blogFace.png'}
                  h={'35px'}
                  w={'35px'}
                  borderRadius={'50%'}
                />
                <Text {...blogSmText}>By Rukayah Bisi</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box {...blogComponentsContainer}>
        <Box {...mainBoxStyle}>
          <Flex
            alignItems={'center'}
            align={'center'}
            justifyContent={'space-between'}
            mb={'54px'}
          >
            <Heading {...blogPrimaryHeading}>Development</Heading>
            <Text {...blogSmText} fontWeight={'700'}>
              View all
            </Text>
          </Flex>

          <Grid
            templateColumns="repeat(3, 1fr)"
            columnGap={'24px'}
            rowGap={'80px'}
          >
            {blogPosts.map((blogPost, i) => (
              <GridItem key={i} w="100%">
                <ChakraNextImage
                  src={blogPost.img}
                  borderRadius={'8px'}
                  h={'273px'}
                  w={'100'}
                  mb={'24px'}
                />
                <Text {...blogSecondaryHeading}>{blogPost.heading}</Text>
                <Text {...blogTrendingDDText}>{blogPost.summary}</Text>
                <Flex gap={'8px'} alignItems={'center'}>
                  <ChakraNextImage src={blogPost.face} h={'35px'} w={'35px'} />
                  <Text {...blogSmText}>{blogPost.name}</Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box {...blogComponentsContainer}>
        <Box {...mainBoxStyle}>
          <Flex
            alignItems={'center'}
            align={'center'}
            justifyContent={'space-between'}
            mb={'54px'}
          >
            <Heading {...blogPrimaryHeading}>Design</Heading>
            <Text {...blogSmText} fontWeight={'700'}>
              View all
            </Text>
          </Flex>

          <Grid
            templateColumns="repeat(3, 1fr)"
            columnGap={'24px'}
            rowGap={'80px'}
          >
            {blogPosts.map((blogPost, i) => (
              <GridItem key={i} w="100%">
                <ChakraNextImage
                  src={blogPost.img}
                  borderRadius={'8px'}
                  h={'273px'}
                  w={'100'}
                  mb={'24px'}
                />
                <Text {...blogSecondaryHeading}>{blogPost.heading}</Text>
                <Text {...blogTrendingDDText}>{blogPost.summary}</Text>
                <Flex gap={'8px'} alignItems={'center'}>
                  <ChakraNextImage src={blogPost.face} h={'35px'} w={'35px'} />
                  <Text {...blogSmText}>{blogPost.name}</Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Blog;
