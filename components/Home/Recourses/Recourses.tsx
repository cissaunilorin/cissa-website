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
        <Flex direction={{ base: 'column', lg: 'row' }} align={'center'}>
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
          <Box flex={1.5}>
            <ChakraNextImage src="/assets/resource.png" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Recourses;
