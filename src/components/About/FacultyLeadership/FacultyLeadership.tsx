import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
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
import { leaderButton, leaderFlex, leaderImage, leaderWrapper } from './style';

const facultyLeaders = [
  {
    name: 'Queen Hearts',
    title: 'H.O.D Information and Communication Science',
    imageSrc: '/assets/woman.png',
  },
  {
    name: 'Adebayo Fawaz',
    title: 'Faculty Dean',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Queen MyLove',
    title: 'Faculty Sub Dean',
    imageSrc: '/assets/oldman.png',
  },
  {
    name: 'Queen Queen',
    title: 'Faculty Dean',
    imageSrc: '/assets/woman.png',
  },
];

const FacultyLeadership: FC = () => {
  return (
    <Box {...mainBoxStyle}>
      <Box {...mainTextBox}>
        <Heading {...mainTextHeading}>Faculty Leadership</Heading>
        <Text {...mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </Text>
      </Box>

      <Flex wrap={'wrap'}>
        {facultyLeaders.map(leader => (
          <Box key={leader.title} {...leaderWrapper}>
            <ChakraNextImage {...leaderImage} src={leader.imageSrc} />
            <Flex {...leaderFlex}>
              <Box w="100%">
                <Heading fontSize="1.5rem">{leader.name}</Heading>
                <Text fontSize="1rem" mt="2">
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
              <Button {...leaderButton}>&#8594;</Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FacultyLeadership;
