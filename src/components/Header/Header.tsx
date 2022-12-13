import { Box, Button, Flex, List, ListItem, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { mainBoxStyle } from '../../styles/common';
import Logo from '../Logo/Logo';
import { headerBox, linkStyle, listStyle } from './styles';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Resources',
    href: '#',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'News & Events',
    href: '#',
  },
  {
    name: 'Contact Us',
    href: '#',
  },
];

const Header: FC = () => {
  const router = useRouter();

  return (
    <Box {...headerBox}>
      <Box {...mainBoxStyle}>
        <Flex justify={'space-between'} align={'center'}>
          <Logo />

          <List display={{ base: 'none', lg: 'flex' }} gap={'32px'}>
            {links.map(link => (
              <ListItem
                {...listStyle(router.pathname === link.href)}
                key={link.name}
              >
                <NextLink href={link.href} passHref>
                  <Link {...linkStyle(router.pathname === link.href)}>
                    {link.name}
                  </Link>
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
