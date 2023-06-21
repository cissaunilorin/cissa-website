import { NextPage } from 'next';
import { Text, Flex, Box, Heading, Link } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';
import ChakraNextImage from '../../chakra-nextimage';
import { heading2Style } from '../../../styles/common';
import { leaderLink } from '../../../styles/pages/about';

interface ExcoPropsType {
  even: boolean;
  exco: any;
}

const Exco: NextPage = (props: any) => {
  return (
    <Flex
      alignItems='center'
      flexDirection={props.even ? 'row-reverse' : 'row'}
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
            {props.exco.name}
          </Heading>
          <Text color='#B4A097' fontSize='20px' fontWeight='600'>
            {props.exco.role}
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
        <Text w='100%'>{props.exco.about}</Text>
      </Box>
    </Flex>
  );
};

export default Exco;
