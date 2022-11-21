import { Box, Text, Flex, Button } from '@chakra-ui/react';

import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import {
  blogButton,
  blogContent,
  blogImageBox,
  blogPrimaryText,
  blogSecondaryText,
  mainBlogButton,
  mainBlogCardImage,
  mainBlogPrimaryText,
  mainBlogSecondaryText,
  mainWrapper,
  primaryFlex,
  secondaryFlex,
  supportText,
} from './styles';

const mainBlogCard = {
  title: 'Lorem ipsum dolor sit amet, consectetur aghyy joyty triuy',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus',
  tag: 'Fashion',
  bgImg: 'url(/assets/blogimage4.png)',
};

const blogCards = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur aghyy joyty triuy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus',
    tag: 'Fashion',
    bgImg: 'url(/assets/blogimage1.png)',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur aghyy joyty triuy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus',
    tag: 'Development',
    bgImg: 'url(/assets/blogimage2.png)',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur aghyy joyty triuy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus',
    tag: 'Design',
    bgImg: 'url(/assets/blogimage3.png)',
  },
];
const Blog: FC = () => {
  return (
    <Box as="section">
      <Box {...mainBoxStyle}>
        <Flex {...mainWrapper}>
          <Text {...heading2Style}>CIS Blog</Text>
          <Text {...supportText}>
            Get to read amazing, intriguing yet mind blowing articles from our
            pool of talented students
          </Text>
        </Flex>
        <Flex {...primaryFlex}>
          <Flex {...secondaryFlex}>
            <Box w={{ base: '90%', md: '45%' }} marginX="auto">
              <Box bgImg={mainBlogCard.bgImg} {...mainBlogCardImage} />
              <Button {...mainBlogButton}>{mainBlogCard.tag}</Button>
              <Text {...mainBlogPrimaryText}>{mainBlogCard.title}</Text>
              <Text {...mainBlogSecondaryText}>{mainBlogCard.description}</Text>
            </Box>
            <Box w={{ base: '90%', md: '45%' }} marginX="auto">
              {blogCards.map((blog, i) => (
                <Flex key={i}>
                  <Box bgImage={blog.bgImg} {...blogImageBox}>
                    <Button {...blogButton}>{blog.tag}</Button>
                  </Box>
                  <Box {...blogContent}>
                    <Text {...blogPrimaryText}>{blog.title}</Text>
                    <Text {...blogSecondaryText}>{blog.description}</Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Blog;
