import { Flex, Box, Text, Heading, Button } from '@chakra-ui/react';
import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import {
  ArrowForwardIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';
import { featureText } from './styles';

const Gallery: FC = () => {
  return (
    <Box as='section' marginBottom={'140px'}>
      <Box {...mainBoxStyle}>
        {' '}
        <Heading as={'h2'} {...heading2Style} textAlign='center' mb={'8px'}>
          Picture Gallery
        </Heading>
        <Text {...featureText}>
          Get directions to anywhere you are going within the faculty
        </Text>
        <Flex pt={'80px'} position='relative'>
          <Button
            bg={'#FFF2EC'}
            borderRadius={'50%'}
            position={'absolute'}
            w='1rem'
            h='2.5rem'
            top='50%'
            left='2rem'
          >
            <ChevronLeftIcon color='#783518' w='2rem' h='1.6rem' />
          </Button>

          <Box
            bg={'url(/assets/gallery-1.jpg)'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundPosition={'0 0, 100% 0'}
            width='100%'
            height={400}
            borderRadius={'5%'}
          ></Box>
          <Box
            bg={'url(/assets/gallery-2.jpg)'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundPosition={'0 0, 100% 0'}
            width='100%'
            transform={'scaleX(1.15)'}
            height={470}
            marginTop={'-40px'}
            borderRadius={'5%'}
          ></Box>
          <Box
            bg={'url(/assets/gallery-3.jpg)'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundPosition={'0 0, 100% 0'}
            width='100%'
            height={400}
            borderRadius={'5%'}
          ></Box>

          <Button
            bg={'#FFF2EC'}
            borderRadius={'50%'}
            position={'absolute'}
            w='1rem'
            h='2.5rem'
            top='50%'
            right='2rem'
          >
            <ChevronRightIcon color='#783518' w='2rem' h='1.6rem' />
          </Button>
        </Flex>
        <Flex>
          <Button
            variant={'light'}
            mt={'40px'}
            rightIcon={<ArrowForwardIcon />}
            borderRadius={'10px'}
            shadow={
              '0px 1px 3px rgba(50, 50, 71, 0.02), 0px 4px 1px rgba(12, 26, 75, 0.1)'
            }
            mx={'auto'}
            px={'30px'}
            py={'21px'}
          >
            Explore Gallery
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Gallery;