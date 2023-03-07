import { NextPage } from 'next';
import { heading2Style, mainBoxStyle } from '../styles/common';
import { Text, Flex, Box, Heading, Link } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';
import { leaderLink } from './../styles/pages/about';
import ChakraNextImage from './../components/chakra-nextimage';

interface ExcoPropsType {
  name: string;
  role: string;
  socialNetworks: {
    facebook: string;
    twitter: string;
    linkedIn: string;
  };
  about: string;
}

const excosMembers: ExcoPropsType[] = [
  {
    name: 'Lateef Olamilekan',
    role: 'Faculty President',
    socialNetworks: {
      facebook: '',
      twitter: '',
      linkedIn: '',
    },
    about:
      'Adebayo Fawaz is a 300 level mass communication student who lorem ipsum dolor sit amet consectetur. Mattis massa proin arcu justo dis. Integer mauris metus semper mauris tempus sed duis sagittis. Vel tellus egestas ultrices est tincidunt integer morbi arcu. Id magna vitae purus diam. Morbi ut lacus quam magna risus sed. Duis nisl dui phasellus vitae. Auctor lacus sagittis viverra interdum adipiscing donec. Elit diam nulla neque dignissim. Imperdiet lacinia tellus cursus gravida orci nibh diam id. Vel tristique etiam arcu velit id. Velit consectetur nulla dolor at.',
  },
  {
    name: 'Adebayo Fawaz',
    role: 'Software Director',
    socialNetworks: {
      facebook: '',
      twitter: '',
      linkedIn: '',
    },
    about:
      'Adebayo Fawaz is a 300 level mass communication student who lorem ipsum dolor sit amet consectetur. Mattis massa proin arcu justo dis. Integer mauris metus semper mauris tempus sed duis sagittis. Vel tellus egestas ultrices est tincidunt integer morbi arcu. Id magna vitae purus diam. Morbi ut lacus quam magna risus sed. Duis nisl dui phasellus vitae. Auctor lacus sagittis viverra interdum adipiscing donec. Elit diam nulla neque dignissim. Imperdiet lacinia tellus cursus gravida orci nibh diam id. Vel tristique etiam arcu velit id. Velit consectetur nulla dolor at.',
  },
  {
    name: 'Lateef Olamilekan',
    role: 'Faculty President',
    socialNetworks: {
      facebook: '',
      twitter: '',
      linkedIn: '',
    },
    about:
      'Adebayo Fawaz is a 300 level mass communication student who lorem ipsum dolor sit amet consectetur. Mattis massa proin arcu justo dis. Integer mauris metus semper mauris tempus sed duis sagittis. Vel tellus egestas ultrices est tincidunt integer morbi arcu. Id magna vitae purus diam. Morbi ut lacus quam magna risus sed. Duis nisl dui phasellus vitae. Auctor lacus sagittis viverra interdum adipiscing donec. Elit diam nulla neque dignissim. Imperdiet lacinia tellus cursus gravida orci nibh diam id. Vel tristique etiam arcu velit id. Velit consectetur nulla dolor at.',
  },
  {
    name: 'Adebayo Fawaz',
    role: 'Software Director',
    socialNetworks: {
      facebook: '',
      twitter: '',
      linkedIn: '',
    },
    about:
      'Adebayo Fawaz is a 300 level mass communication student who lorem ipsum dolor sit amet consectetur. Mattis massa proin arcu justo dis. Integer mauris metus semper mauris tempus sed duis sagittis. Vel tellus egestas ultrices est tincidunt integer morbi arcu. Id magna vitae purus diam. Morbi ut lacus quam magna risus sed. Duis nisl dui phasellus vitae. Auctor lacus sagittis viverra interdum adipiscing donec. Elit diam nulla neque dignissim. Imperdiet lacinia tellus cursus gravida orci nibh diam id. Vel tristique etiam arcu velit id. Velit consectetur nulla dolor at.',
  },
];

const findEven: (id: number) => boolean = (id) => {
  return id % 2 === 0 ? true : false;
};

const Excos: NextPage = () => {
  return (
    <Box {...mainBoxStyle} my='150px'>
      <Flex flexDirection='column' gap='8rem'>
        {excosMembers.map((exco: ExcoPropsType, id: number) => {
          return (
            <Flex
              key={id}
              alignItems='center'
              flexDirection={findEven(id + 1) ? 'row-reverse' : 'row'}
              gap='5rem'
            >
              <ChakraNextImage
                w='100%'
                h='500px'
                src={'/assets/placeholder.png'}
                borderRadius='20px'
              />
              <Box w='100%'>
                <Box mb='.8rem'>
                  <Heading {...heading2Style} fontSize='30px'>
                    {exco.name}
                  </Heading>
                  <Text color='#B4A097' fontSize='20px' fontWeight='600'>
                    {exco.role}
                  </Text>
                </Box>
                <Flex mb='1.7rem' gap='.6rem'>
                  <Link {...leaderLink} bg='none' border='1px solid #814226'>
                    <RiFacebookFill size='16px' color='#814226' />
                  </Link>
                  <Link {...leaderLink} bg='none' border='1px solid #814226'>
                    <FaTwitter size='16px' color='#814226' />
                  </Link>
                  <Link {...leaderLink} bg='none' border='1px solid #814226'>
                    <RiLinkedinFill size='16px' color='#814226' />
                  </Link>
                </Flex>
                <Text w='100%'>{exco.about}</Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Excos;
