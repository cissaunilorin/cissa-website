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

const Overview = () => {
  return (
    <>
      <Box {...overviewSection}>
        <Box {...mainBoxStyle}>
          <Box {...overviewBox}>
            <Heading {...overviewHeading}>
              Department of Mass Communication
            </Heading>
            <Flex {...socialIcons}>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src="/assets/facebook.svg"
                  w="8.89px"
                  h="16px"
                />
              </Box>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src="/assets/twitter.svg"
                  w="20.03px"
                  h="17.03px"
                />
              </Box>
              <Box {...socialIcon}>
                <ChakraNextImage
                  src="/assets/linkedin.svg"
                  w="17.5px"
                  h="17px"
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
