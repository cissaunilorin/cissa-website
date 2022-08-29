import { Box, Flex, Text, Heading, Image, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ChakraNextImage from '../../chakra-nextimage';
import { FC } from 'react';
import { mainBoxStyle, heading2Style } from '../../../styles/common';
import {
  resourceContainer,
  resourceText,
  resourceBoximg,
  resourceImgTags,
  resourceIcons,
  resourceSmallText,
  resourceImgTag3,
  resourceImgTag2,
  resourceImgTag1,
  resourcedots1,
  resourcedots2,
} from './style';

const Recourses: FC = () => {
  return (
    <Box {...resourceContainer}>
      <Box {...mainBoxStyle}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={'center'}
          gap={{ base: '50px', md: '30px' }}
        >
          <Box flex={1}>
            <Heading {...heading2Style}>Resources</Heading>
            <Text {...resourceText}>
              Course materials, past questions, quizzes and other academic
              materials to help you become a star student are provided here by
              lecturers with essential resources that would help you grow along
              with the line you studied.
            </Text>
            <Button variant={'light'} rightIcon={<ArrowForwardIcon />}>
              Learn more
            </Button>
          </Box>
          <Box {...resourceBoximg}>
            <ChakraNextImage
              src="/assets/resourcedots.png"
              w="98px"
              h="72.02px"
              pos="absolute"
              {...resourcedots1}
            />
            <ChakraNextImage
              src="/assets/resourcedots.png"
              w="98px"
              h="72.02px"
              pos="absolute"
              {...resourcedots2}
            />
            <ChakraNextImage
              src="/assets/bookimg.png"
              w={{ base: '500px', md: '500px', lg: '597.82px' }}
              h={{ base: '460px', md: '400px', lg: '466px' }}
              borderRadius="30px"
              position="relative"
            />
            <Flex dir="row" {...resourceImgTags} {...resourceImgTag1}>
              <Flex
                align={'center'}
                justifyContent={'center'}
                {...resourceIcons}
              >
                <ChakraNextImage src="/assets/head.png" w="15.99px" h="18px" />
              </Flex>
              <Text {...resourceSmallText}>
                Take your brain for a mental hike with quiz!
              </Text>
            </Flex>
            <Flex dir="row" {...resourceImgTags} {...resourceImgTag2}>
              <Flex
                align={'center'}
                justifyContent={'center'}
                {...resourceIcons}
              >
                <ChakraNextImage src="/assets/paper.png" w="15.99px" h="18px" />
              </Flex>
              <Text {...resourceSmallText}>1000+ Free Past Questions</Text>
            </Flex>
            <Flex dir="row" {...resourceImgTags} {...resourceImgTag3}>
              <Flex
                align={'center'}
                justifyContent={'center'}
                {...resourceIcons}
              >
                <ChakraNextImage src="/assets/paper.png" w="15.99px" h="18px" />
              </Flex>
              <Text {...resourceSmallText}>
                Firsthand materials from lecturers
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Recourses;
