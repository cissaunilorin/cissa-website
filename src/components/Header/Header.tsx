import { Box, Button, Flex, List, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { mainBoxStyle } from '../../styles/common';
import Logo from '../Logo/Logo';
import { headerBox, linkStyle, listStyle, mobileMenuStyle } from './styles';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  // {
  //   name: 'Resources',
  //   href: '#',
  // },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'CGPA calculator',
    href: '/calculate-cgpa',
  },
];

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsOpen(false);
    });
  }, [router]);
  return (
    <Box {...headerBox}>
      <Box {...mainBoxStyle}>
        <Flex justify={'space-between'} align={'center'}>
          <Logo />

          <List display={{ base: 'none', lg: 'flex' }} gap={'32px'}>
            {links.map((link) => (
              <ListItem
                {...listStyle(router.pathname === link.href)}
                key={link.name}>
                <ChakraLink
                  as={NextLink}
                  href={link.href}
                  {...linkStyle(router.pathname === link.href)}
                >
                  {link.name}
                </ChakraLink>
              </ListItem>
            ))}
          </List>
          <Button
            zIndex={'99'}
            w='50px'
            h='40px'
            display={{ base: 'flex', lg: 'none' }}
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && <HamburgerIcon fontSize={'25px'} />}
            {isOpen && <CloseIcon fontSize={'15px'} />}
          </Button>

          <Box
            {...mobileMenuStyle(isOpen)}
            display={{ base: 'flex', lg: 'none' }}>
            <List display={'flex'} flexDir='column' gap={'32px'}>
              {links.map((link) => (
                <ListItem
                  {...listStyle(router.pathname === link.href)}
                  key={link.name}>
                  <ChakraLink
                    as={NextLink}
                    href={link.href}
                    {...linkStyle(router.pathname === link.href)}
                  >
                    {link.name}
                  </ChakraLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
