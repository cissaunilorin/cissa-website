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
            <Heading {...aboutPrimaryHeading}>Our History</Heading>
            <Text {...aboutHistoryText}>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra,
              semper. Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat. enim. Quis at habitant diam at. Suscipit tristique
              risus, at donec. In turpis vel et q.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
