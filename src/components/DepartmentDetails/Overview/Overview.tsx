import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import ChakraNextImage from '../../chakra-nextimage';
import {
  overviewSection,
  overviewHeading,
  overviewBox,
  socialIcons,
  socialIcon,
} from './style';
import { mainBoxStyle } from '../../../styles/common';
import { FC } from 'react';

const Overview: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Box {...overviewSection}>
        <Box {...mainBoxStyle}>
          <Box {...overviewBox}>
            <Heading {...overviewHeading}>Department of {name}</Heading>
            <Flex {...socialIcons}>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src='/assets/facebook.svg'
                  w='8.89px'
                  h='16px'
                  alt="Facebook icon"
                />
              </Box>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src='/assets/twitter.svg'
                  w='20.03px'
                  h='17.03px'
                  alt="Twitter icon"
                />
              </Box>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src='/assets/instagram.svg'
                  w='16px'
                  h='16px'
                  alt="Instagram icon"
                />
              </Box>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src='/assets/linkedin.svg'
                  w='17.5px'
                  h='17px'
                  alt="LinkedIn icon"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
