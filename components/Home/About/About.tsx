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

const about = [
  {
    heading: '800 Lecturers',
    text: 'Course materials, past questions, qui quiquiquiquiv',
  },
  {
    heading: 'Conducive Lecture rooms',
    text: 'Course materials, past questions, qui quiquiquiquiv',
  },
];

const About: FC = () => {
  return (
    <Box {...aboutContainer}>
      <Box {...mainBoxStyle}>
        <Flex align={'center'} direction={{ base: 'column', lg: 'row' }}>
          <Box flex={1}></Box>

          <Box flex={'0 0 429px'}>
            <Heading {...heading2Style}>About Us</Heading>
            <Text {...aboutText}>
              The faculty of communication and information sciences was
              established in the year 2002,It as 5 deartments with
            </Text>

            {about.map((cur, i) => (
              <Box mb="20px" key={i}>
                <Flex mb={'15px'} gap={'11px'} align={'center'}>
                  <Icon
                    as={BsCheckCircleFill}
                    fontSize={'22px'}
                    color="#17C452"
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
            >
              Learn more
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
