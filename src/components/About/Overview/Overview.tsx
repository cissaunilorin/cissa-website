import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import ChakraNextImage from '../../chakra-nextimage';
import { Button } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  aboutHistoryPlayCircle,
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
      </Flex>{' '}
      <Box {...aboutSectionHistory}>
        <Box {...mainBoxStyle}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            gap={{ base: '50px', md: '30px', lg: '72px' }}
          >
            <Box>
              <Heading {...aboutPrimaryHeading}>Our History</Heading>
              <Text {...aboutHistoryText}>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.Eget quis mi enim, leo
                lacinia pharetra, semper. Eget in volutpat mollis at volutpat
                lectus velit, sed auctor. Porttitor fames arcu quis fusce augue
                enim. Quis at habitant diam at. Suscipit tristique risus, at
                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
                sodales id est ac volutpat. enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et q.
              </Text>
              <Button
                variant={'light'}
                rightIcon={<ArrowForwardIcon fontSize={'24px'} />}
                fontWeight={'700'}
              >
                Read more
              </Button>
            </Box>

            <Box
              position={'relative'}
              w={{ base: '100%', md: '590px', lg: '600px' }}
            >
              <ChakraNextImage
                src="/assets/class.png"
                w="100%"
                css={{ aspectRatio: '600/560' }}
                borderRadius="30px"
              />
              <ChakraNextImage
                src="/assets/dotsA.png"
                display={{ base: 'none', md: 'block' }}
                h={{ base: '150px', md: '170px', lg: '190px' }}
                w={{ base: '200px', md: '250px', lg: '310px' }}
                pos={'absolute'}
                top={'-90px'}
                right={'-50px'}
                zIndex={'-1'}
              />
              <Flex {...aboutHistoryPlayCircle}>
                <FaPlay color={'#814226'} size={'34'} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Overview;
