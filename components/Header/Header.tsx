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
    name: 'About',
    href: '/',
  },
  {
    name: 'Resources',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/',
  },
  {
    name: 'News & Events',
    href: '/',
  },
  {
    name: 'Contact Us',
    href: '/',
  },
];

const Header: FC = () => {
  return (
    <Box
      as="header"
      boxShadow="0px 0px 27px 1px rgba(120, 53, 24, 0.12)"
      bg={'white'}
      py={'17px'}
      position="fixed"
      top={'0'}
      left={'0'}
      right={'0'}
      zIndex={'100'}
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
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
