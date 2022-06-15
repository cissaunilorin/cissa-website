import { Avatar, Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Header: FC = () => {
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
        name="Adebayo Fawaz"
      />
    </Flex>
  );
};

export default Header;
