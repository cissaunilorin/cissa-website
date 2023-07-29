import { Box, Flex, Text, Heading } from '@chakra-ui/react';

import {
  aboutHistoryText,
  aboutLgHeading,
  aboutSectionHero,
  aboutSmHeading,
} from './style';
import { mainBoxStyle } from '../../../styles/common';
import {
  aboutPrimaryHeading,
  aboutSectionHistory,
} from '../../../styles/pages/about';

const Overview = () => {
  return (
    <>
      <Flex {...aboutSectionHero}>
        <Text {...aboutSmHeading}>Here we are helping to</Text>
        <Text {...aboutLgHeading}>Nuture A Global Village.</Text>
      </Flex>

      <Box {...aboutSectionHistory}>
        <Box {...mainBoxStyle}>
          <Box position={'relative'} w={{ base: '100%' }}>
            <Heading {...aboutPrimaryHeading}>About Us</Heading>
            <Text {...aboutHistoryText}>
              The Faculty of Communication and Information Sciences is a
              distinguished faculty in the University of Ilorin, established in
              the year 2008. It offers comprehensive programmes in various
              communication disciplines including: Library and Information
              sciences, Mass communication, Computer Science, Information
              Technology, and Telecommunication science. The faculty houses some
              of the best and students who collaboratively share knowledge and
              skills to advance the information gathering and sharing process in
              society. It is committed to actively producing well-seasoned and
              up-to-date graduates who will contribute to creating a faster,
              efficient, seamless, and more advanced communication process.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
