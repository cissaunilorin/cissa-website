import { Box, Button, Flex, List, ListItem, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import { FC, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box {...headerBox}>
      <Box {...mainBoxStyle}>
        <Flex justify={'space-between'} align={'center'}>
          <Logo />

          <List display={{ base: 'none', lg: 'flex' }} gap={'32px'}>
            {links.map((link) => (
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
          <Button
            zIndex={'99'}
            w="50px"
            h="40px"
            display={{ base: 'flex', lg: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && <HamburgerIcon fontSize={'25px'} />}
            {isOpen && <CloseIcon fontSize={'15px'} />}
          </Button>

          <Box
            {...mobileMenuStyle(isOpen)}
            display={{ base: 'flex', lg: 'none' }}
          >
            <List display={'flex'} flexDir="column" gap={'32px'}>
              {links.map((link) => (
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
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
