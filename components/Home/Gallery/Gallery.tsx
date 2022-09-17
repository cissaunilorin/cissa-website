import { Flex, Box, Text, Heading, Button, IconButton } from '@chakra-ui/react';
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
  button
} from './styles';

const Gallery: FC = () => {
  return (
    <Box as='section' marginBottom={'140px'}>
      <Box {...resourceBoximg}>
        <ChakraNextImage
          src='/images/icons/resourcedots.svg'
          w='98px'
          h='72.02px'
          pos='absolute'
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
        <Flex pt={'80px'} position='relative'>
          <IconButton {...iconBtn} left={'2rem'}>
            <ChevronLeftIcon color='#783518' w='2rem' h='1.6rem' />
          </IconButton>

          <Box bg={'url(/assets/gallery-1.png)'} {...galleryImage}></Box>
          <Box
            bg={'url(/assets/gallery-2.png)'}
            {...galleryImage}
            transform={'scaleX(1.15)'}
            height={470}
            marginTop={'-40px'}
          ></Box>
          <Box bg={'url(/assets/gallery-3.png)'} {...galleryImage}></Box>

          <IconButton {...iconBtn} right='2rem'>
            <ChevronRightIcon color='#783518' w='2rem' h='1.6rem' />
          </IconButton>
        </Flex>
        <Flex>
          <Button
            variant={'light'}            
            rightIcon={<ArrowForwardIcon />}
            {...button}
          >
            Explore Gallery
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Gallery;
