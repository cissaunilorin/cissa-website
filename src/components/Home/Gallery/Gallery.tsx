import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  IconButton,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import {
  ArrowForwardIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';
import ChakraNextImage from '../../chakra-nextimage';
import {
  featureText,
  iconBtn,
  galleryImage,
  resourcedots1,
  resourceBoximg,
  icon,
  button,  
} from './styles';

const Gallery: FC = () => {
  return (
    <Box as='section' mt={{ base: '100px', md: '198px' }}
      mb={{ base: '54px', md: '104px' }}>
      <Box {...resourceBoximg}>
        <ChakraNextImage
          src='/images/icons/resourcedots.svg'
          w='98px'
          h='72.02px'
          pos='absolute'
          alt='Gallery section decoration dots'
          {...resourcedots1}
        />
      </Box>
      <Box {...mainBoxStyle}>
        {' '}
        <Heading as={'h2'} {...heading2Style} textAlign='center' mb={'8px'}>
          Picture Gallery
        </Heading>
        <Text {...featureText}>
          Get directions to anywhere you are going within the faculty
        </Text>
        <Flex pt={'80px'} position='relative' mt={'12'}>
          <IconButton
            aria-label='Left icon'
            {...iconBtn}
            left={'2rem'}
            icon={<ChevronLeftIcon {...icon} />}
          />

          <Box bg={'url(/assets/gallery-1.png)'} {...galleryImage}></Box>
          <Box
            bg={'url(/assets/gallery-2.png)'}
            {...galleryImage}
            transform={'scaleX(1.15)'}
            height={380}
            marginTop={'-40px'}
          ></Box>
          <Box bg={'url(/assets/gallery-3.png)'} {...galleryImage}></Box>

          <IconButton
            aria-label='Right icon'
            {...iconBtn}
            right={'2rem'}
            icon={<ChevronRightIcon {...icon} />}
          />
        </Flex>
        <Flex>
          <Button as={NextLink} href='/gallery' rightIcon={<ArrowForwardIcon />} {...button}>
            Explore Gallery
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Gallery;
