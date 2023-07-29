import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import ChakraNextImage from '../../chakra-nextimage';
import {
  factsBox,
  factsHeading,
  factsInnerBox,
  factsText,
  featureText,
} from './styles';

const facts = [
  {
    img: 'fact-clock.png',
    heading: 'Students',
    text: 'The faculty’s regular clean up exercises earns it the title of one of the cleanest in UNILORIN',
  },
  {
    img: 'fact-grad.png',
    heading: 'Graduates',
    text: 'Since inception about 2,500+ students have graduated',
  },
  {
    img: 'fact-dep.png',
    heading: 'Departments',
    text: 'The faculty hosts five of the most technologically driven disciplines in society and all departments in the faculty are communication, information, and media centric',
  },
  {
    img: 'fact-event.png',
    heading: 'Events',
    text: 'Laykon led administration of 2021/22 academic session produced the first CISSA magazine, CISSA mock exam, facilitator of CISSA Library, CISSA file jacket and creation of this website',
  },
];

const Facts: FC = () => {
  return (
    <Box
      as='section'
      mt={{ base: '100px', md: '198px' }}
      mb={{ base: '54px', md: '104px' }}>
      <Box {...mainBoxStyle}>
        <Heading as={'h2'} {...heading2Style} textAlign='center' mb={'8px'}>
          Amazing Facts
        </Heading>
        <Text {...featureText}>
          Here are some amazing things about the faculty of CIS.
        </Text>
      </Box>

      <Box {...factsInnerBox}>
        <Box {...mainBoxStyle}>
          <Flex justify={'center'} gap='32px' wrap={'wrap'}>
            {facts.map((fact, i) => (
              <Box {...factsBox} key={i}>
                <ChakraNextImage
                  src={`/assets/${fact.img}`}
                  h={'78px'}
                  w={'78px'}
                  mx={'auto'}
                  mb={'32px'}
                />

                <Heading {...factsHeading}>{fact.heading}</Heading>
                <Text {...factsText}>{fact.text}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Facts;
