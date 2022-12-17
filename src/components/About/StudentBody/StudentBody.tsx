import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { mainBoxStyle } from '../../../styles/common';
import {
  leaderLink,
  mainText,
  mainTextBox,
  mainTextHeading,
} from '../../../styles/pages/about';
import ChakraNextImage from '../../chakra-nextimage';
import { studentBodyFlex, studentBodyImage, studentBodyWrapper } from './style';

const studentBody = [
  {
    name: 'Olamilekan  Sodiq',
    title: 'Faculty President',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Olamilekan Tesleemah',
    title: 'Faculty Vice President',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Elijah Oyindamola',
    title: 'General Secretary',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Adeleye Abigail',
    title: 'Welfare Secretary',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Adeleye Abigail',
    title: 'Secretary',
    imageSrc: '/assets/man.png',
  },
];

const StudentBody: FC = () => {
  return (
    <Box {...mainBoxStyle}>
      <Box {...mainTextBox}>
        <Heading {...mainTextHeading}>Student Body</Heading>
        <Text {...mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </Text>
      </Box>

      <Flex wrap="wrap">
        {studentBody.map(leader => (
          <Flex key={leader.title} {...studentBodyWrapper}>
            <ChakraNextImage src={leader.imageSrc} {...studentBodyImage} />
            <Flex {...studentBodyFlex}>
              <Box w="100%">
                <Heading fontSize="1.2rem">{leader.name}</Heading>
                <Text fontSize=".8rem" mt="2">
                  {leader.title}
                </Text>
                <Flex mt="4">
                  <Link
                    _hover={{ bg: '#814226', _first: { color: '#F3F2F2' } }}
                    {...leaderLink}
                  >
                    <FaTwitter size="20px" />
                  </Link>
                  <Link
                    _hover={{ bg: '#814226', _notFirst: { color: '#F3F2F2' } }}
                    {...leaderLink}
                  >
                    <FaFacebook size="20px" />
                  </Link>
                  <Link
                    _hover={{ bg: '#814226', _last: { color: '#F3F2F2' } }}
                    {...leaderLink}
                  >
                    <FaLinkedin size="20px" />
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default StudentBody;
