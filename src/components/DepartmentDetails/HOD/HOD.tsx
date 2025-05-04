import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import {
  hodAboutBox,
  hodImg,
  hodHeading,
  hodName,
  aboutHodText,
} from './style';
import ChakraNextImage from '../../chakra-nextimage';
import { mainBoxStyle } from '../../../styles/common';

const HOD = () => {
  return (
    <>
      <Box>
        <Box {...mainBoxStyle}>
          <Flex {...hodAboutBox}>
            <ChakraNextImage 
              src="assets/blogimg2.png" 
              h="210px" 
              {...hodImg} 
              alt="Head of Department"
            />
            <Box>
              <Heading {...hodHeading}>Head of department</Heading>
              <Text {...hodName}>General Iroh west</Text>
              <Text {...aboutHodText}>
                He is a skilled Firebender and a war hero who played a key role
                in ending the Hundred Year War between the Fire Nation and the
                other nations of the Avatar world. Iroh is known for his wisdom,
                kindness, and sense of humor, as well as his strong devotion to
                his family and his nation. He is also a mentor and father figure
                to the show&apos;s main character, Prince Zuko, helping him to
                find his true path in life.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HOD;
