import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { FaInstagram, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { mainBoxStyle } from '../../../styles/common';
import { heading, listStyle } from './styles';
import { useRouter } from 'next/router';

const links = [
  {
    icon: FaTwitter,
    href: 'https://twitter.com/cissa_unilorin',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/cissa_unilorin/',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:cissa@students.unilorin.edu.ng',
  },
];

const Overview: FC = () => {
  const router = useRouter();
  return (
    <Box as='section'>
      <Box
        pt='265px'
        pb='40px'
        w={'100%'}
        bgImg={
          'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/ov-1.png)'
        }
        bgPos={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}>
        <Box {...mainBoxStyle}>
          <Flex
            mb='160px'
            justify={'space-between'}
            direction={{ base: 'column', lg: 'row' }}
            align={{ base: 'flex-start', lg: 'center' }}
            gap='30px'>
            <Box width='508px' maxW={'100%'}>
              <Heading {...heading}>
                Welcome to Faculty of Communication and Information Sciences,
                Unilorin.
              </Heading>
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant='outlineWhite'
                onClick={() => {
                  router.push('/about');
                }}>
                Take a Tour
              </Button>
            </Box>

            <List display={'flex'} flexDir={{ lg: 'column' }} gap='40px'>
              {links.map((link) => (
                <ListItem key={link.href} {...listStyle}>
                  <Link href={link.href} isExternal>
                    <Icon as={link.icon} color='#FFF2EC' fontSize={'24px'} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
