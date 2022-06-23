import { Box, Button, Flex, List, ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { mainBoxStyle } from '../../styles/common';
import Logo from '../Logo/Logo';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Departments',
    href: '/',
  },
  {
    name: 'Resources',
    href: '/',
  },
  {
    name: 'News & Events',
    href: '/',
  },
  {
    name: 'Map',
    href: '/',
  },
];

const Header: FC = () => {
  return (
    <Box
      as="header"
      boxShadow="0px 0px 27px 1px rgba(120, 53, 24, 0.12)"
      py={'17px'}
    >
      <Box {...mainBoxStyle}>
        <Flex justify={'space-between'} align={'center'}>
          <Logo />

          <List display={{ base: 'none', lg: 'flex' }} gap={'32px'}>
            {links.map(link => (
              <ListItem key={link.name}>
                <NextLink href={link.href} passHref>
                  <Link>{link.name}</Link>
                </NextLink>
              </ListItem>
            ))}
          </List>

          <Button display={{ base: 'none', lg: 'flex' }}>Contact us</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
