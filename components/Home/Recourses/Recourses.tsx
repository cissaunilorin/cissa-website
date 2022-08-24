import {
  Box,
  Flex,
  grid,
  Text,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ChakraNextImage from '../../chakra-nextimage';
import resourceImg from '../../../public/assets/resource.png';
import { FC } from 'react';
import { mainBoxStyle, heading2Style } from '../../../styles/common';
import { resourceContainer, resourceText } from './style';

const Resource = [
  {
    img: 'resource.png',
  },
];
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
