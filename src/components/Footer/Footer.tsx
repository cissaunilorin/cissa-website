import {
  Box,
  Flex,
  chakra,
  Text,
  Heading,
  List,
  ListItem,
  Link,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { mainBoxStyle } from '../../styles/common';
import { footerBox, linkHeading, linkItems } from './style';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Logo from '../Logo/Logo';

// const quickLinks = [
//   {
//     name: 'Archive',
//     href: '/',
//   },
//   {
//     name: 'Course materials',
//     href: '/about',
//   },
// ];

const pageLinks = [
  {
    name: 'About',
    href: '/about',
  },
  // {
  //   name: 'Blog',
  //   href: '/blog',
  // },
  // {
  //   name: 'Events',
  //   href: '/events',
  // },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'CGPA calculator',
    href: '/calculate-cgpa',
  },
];

const social = [
  // {
  //   name: FaFacebook,
  //   href: '#',
  // },
  {
    name: FaTwitter,
    href: 'https://twitter.com/cissa_unilorin',
  },
  {
    name: FaInstagram,
    href: 'https://www.instagram.com/cissa_unilorin/',
  },
  {
    name: FaEnvelope,
    href: 'mailto:cissa@students.unilorin.edu.ng',
  },
];

const Footer: FC = () => {
  return (
    <Box as='footer' {...footerBox}>
      <Box {...mainBoxStyle}>
        <Flex
          py={'50px'}
          gap={'40px'}
          direction={{ base: 'column', md: 'row' }}>
          <Box width={'340px'} maxW='100%' alignSelf={'flex-start'}>
            <Logo white />
          </Box>

          <Box width={'340px'} maxW='100%'>
            <Heading {...linkHeading}>Pages</Heading>

            <List>
              {pageLinks.map((link) => (
                <ListItem key={link.name}>
                  <Link as={NextLink} href={link.href} {...linkItems}>
                    {link.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box width={'340px'} maxW='100%'>
            <Heading {...linkHeading}>Connect</Heading>

            <Flex gap={'20px'}>
              {social.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  isExternal
                  _hover={{ opacity: 0.8 }}
                >
                  <Icon as={link.name} h='30px' w='30px' color={'white'} />
                </Link>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
      <chakra.hr borderColor={'white'} />
      <Box {...mainBoxStyle}>
        <Text
          py={'15px'}
          textAlign='center'
          fontWeight={300}
          fontSize='16px'
          lineHeight='100%'
          color='white'>
          Managed by the CISSA Software Director, CEC 2024/25 session        {/* *************************************************************** */}
          <br />
          <br />
          {new Date().getFullYear()}. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
