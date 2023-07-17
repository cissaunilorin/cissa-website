import { Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import ChakraNextImage from '../chakra-nextimage';

const Logo: FC<{ white?: boolean }> = ({ white }) => {
  return (
    <NextLink href='/' passHref>
      <Link
        display={'flex'}
        gap={'10px'}
        _hover={{ textDecoration: 'none' }}
        alignItems='center'>
        <ChakraNextImage
          src='/images/icons/cissa.png'
          width={{ base: '30px', md: '40px' }}
          height={{ base: '30px', md: '40px' }}
          alt='logo'
        />
        <Text
          fontSize={'20px'}
          fontWeight={700}
          color={white ? 'white' : 'brown.deep'}>
          CIS
        </Text>
      </Link>
    </NextLink>
  );
};

export default Logo;
