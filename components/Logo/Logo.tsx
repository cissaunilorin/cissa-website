import { Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <NextLink href="/" passHref>
      <Link
        display={'flex'}
        gap={'10px'}
        _hover={{ textDecoration: 'none' }}
        alignItems="center"
      >
        <Image
          src="/images/icons/cissa.png"
          width={40}
          height={40}
          alt="logo"
        />
        <Text fontSize={'20px'} fontWeight={700} color="brown.deep">
          CIS
        </Text>
      </Link>
    </NextLink>
  );
};

export default Logo;
