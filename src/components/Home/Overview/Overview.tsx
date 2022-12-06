import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { mainBoxStyle } from '../../../styles/common';
import {
  annoucementHeading,
  annoucementLink,
  annoucementText,
  heading,
  iconButton,
  listStyle,
  NewsTextBox,
} from './styles';

const links = [
  {
    icon: FaLinkedinIn,
    href: '#',
  },
  {
    icon: FaFacebookF,
    href: '#',
  },
  {
    icon: FaTwitter,
    href: '#',
  },
];

const Overview: FC = () => {
  return (
    <Box as="section">
      <Box
        pt="265px"
        pb="40px"
        w={'100%'}
        bgImg={
          'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/ov-1.png)'
        }
        bgPos={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      >
        <Box {...mainBoxStyle}>
          <Flex mb="160px" justify={'space-between'} align="center">
            <Box width="508px" maxW={'100%'}>
              <Heading {...heading}>
                Welcome to Faculty of Communication and Information Sciences,
                Unilorin.
              </Heading>
              <Button rightIcon={<ArrowForwardIcon />} variant="outlineWhite">
                Take a Tour
              </Button>
            </Box>

            <List display={'flex'} flexDir={{ lg: 'column' }} gap="40px">
              {links.map((link, i) => (
                <ListItem key={i} {...listStyle}>
                  <NextLink href={link.href} passHref>
                    <Icon as={link.icon} color="#FFF2EC" fontSize={'24px'} />
                  </NextLink>
                </ListItem>
              ))}
            </List>
          </Flex>

          <Flex align={'center'} justify="flex-start" w={'500px'} maxW="100%">
            <Box {...NewsTextBox}>News</Box>

            <Box
              flex={1}
              overflowX="auto"
              css={{ '::-webkit-scrollbar': { display: 'none' } }}
              mr="10px"
            >
              <Flex>
                <Box flex="0 0 190px" color="#fff2ec">
                  <Heading {...annoucementHeading}>Course registration</Heading>
                  <Text {...annoucementText}>
                    This is to inform all students on the commencement.......
                  </Text>
                  <NextLink href={'#'} passHref>
                    <Link {...annoucementLink}>
                      Read More <ArrowForwardIcon />
                    </Link>
                  </NextLink>
                </Box>
                <Box flex="0 0 190px" color="#fff2ec">
                  <Heading {...annoucementHeading}>Course registration</Heading>
                  <Text {...annoucementText}>
                    This is to inform all students on the commencement.......
                  </Text>
                  <NextLink href={'#'} passHref>
                    <Link {...annoucementLink}>
                      Read More <ArrowForwardIcon />
                    </Link>
                  </NextLink>
                </Box>
                <Box flex="0 0 190px" color="#fff2ec">
                  <Heading {...annoucementHeading}>Course registration</Heading>
                  <Text {...annoucementText}>
                    This is to inform all students on the commencement.......
                  </Text>
                  <NextLink href={'#'} passHref>
                    <Link {...annoucementLink}>
                      Read More <ArrowForwardIcon />
                    </Link>
                  </NextLink>
                </Box>
              </Flex>
            </Box>

            <Box>
              <IconButton
                aria-label="next"
                icon={<ArrowForwardIcon />}
                {...iconButton}
              />
              <IconButton
                aria-label="previous"
                icon={<ArrowBackIcon />}
                {...iconButton}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
