import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import {
  aboutBoxHeading,
  aboutContainer,
  aboutSmText,
  aboutText,
} from './style';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ChakraNextImage from '../../chakra-nextimage';
import { useRouter } from 'next/router';

const about = [
  {
    heading: '5 departments',
    text: 'The faculty has 5 deparments.',
  },
  {
    heading: 'Conducive Lecture rooms',
    text: 'Course materials, past questions and learning facilities',
  },
];

const About: FC = () => {
  const router = useRouter();
  return (
    <Box {...aboutContainer}>
      <Flex
        {...mainBoxStyle}
        align={'center'}
        justify={{ base: 'center', lg: 'space-between' }}
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: '40px', lg: 'unset' }}>
        <Flex
          flex={{ lg: '0 0 651px' }}
          gap={{ base: '20px', lg: '40px' }}
          justify={{ base: 'center', lg: 'flex-start' }}>
          <Flex
            gap={{ base: '20px', lg: '40px' }}
            direction={'column'}
            align={'flex-end'}>
            <ChakraNextImage
              h={{ base: '113px', md: '143px', lg: '193px' }}
              w={{ base: '118px', md: '148px', lg: '198px' }}
              borderRadius='14px'
              src={`/assets/about-img-1.png`}
            />

            <ChakraNextImage
              h={{ base: '136px', md: '176px', lg: '236px' }}
              w={{ base: '153px', md: '193px', lg: '253px' }}
              borderRadius='14px'
              src={`/assets/about-img-2.png`}
            />
          </Flex>

          <ChakraNextImage
            h={{ base: '317px', md: '377px', lg: '437px' }}
            flex={{ base: '0 0 148px', md: '0 0 198px', lg: '0 0 258px' }}
            borderRadius='14px'
            src={`/assets/about-img-3.png`}
          />
        </Flex>

        <Box w={'429px'} maxW='100%'>
          <Heading {...heading2Style}>About Us</Heading>
          <Text {...aboutText}>
            The faculty of communication and information sciences was
            established in the year 2008,It has 5 departments
          </Text>

          {about.map((cur, i) => (
            <Box mb='20px' key={i}>
              <Flex mb={'15px'} gap={'11px'} align={'center'}>
                <Icon
                  as={BsCheckCircleFill}
                  fontSize={'22px'}
                  color='#17C452'
                />
                <Heading {...aboutBoxHeading}>{cur.heading}</Heading>
              </Flex>
              <Text {...aboutSmText}>{cur.text}</Text>
            </Box>
          ))}

          <Button
            variant={'light'}
            mt={'20px'}
            rightIcon={<ArrowForwardIcon />}
            onClick={() => {
              router.push('/about');
            }}>
            Learn more
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
