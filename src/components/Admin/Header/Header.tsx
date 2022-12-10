import { Avatar, Box, Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { FC } from 'react';

const Header: FC = () => {
  const { data } = useSession();

  return (
    <Flex
      as="header"
      padding={'10px 20px'}
      justifyContent="space-between"
      borderBottom="1px solid #CDA898"
      backgroundColor={'brown.trans'}
    >
      <Box></Box>

      <Avatar
        backgroundColor={'brown.light'}
        color="brown.deep"
        name={data?.user.name}
        // src={data?.user.}
      />
    </Flex>
  );
};

export default Header;
