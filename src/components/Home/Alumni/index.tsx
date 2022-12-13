import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import { mainImages, mainWrapper, resourcedots1, supportText } from './styles';
import ChakraNextImage from '../../chakra-nextimage/index';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Alumni = () => {
  return (
    <Box as="section" my={'24'}>
      <Box>
        <Box {...mainBoxStyle} pos="relative">
          <ChakraNextImage
            src="/images/icons/alumni-small-dots.svg"
            w="98px"
            h="72.02px"
            pos="absolute"
            {...resourcedots1}
          />
          <Heading {...heading2Style} textAlign="center">
            Hear From Our Alumni
          </Heading>
          <Text {...supportText}>
            Here are some amazing things said by our past students
          </Text>
        </Box>

        <Flex {...mainBoxStyle} pos="relative" mt={'28'}>
          <ChakraNextImage
            src="/images/icons/alumni-big-dots.svg"
            w="200px"
            h="150px"
            pos="absolute"
            left="1%"
            top="0"
          />

          <Box
            pos="absolute"
            w="40rem"
            top="20%"
            left="10rem"
            bg="white"
            boxShadow="0px 4px 40px rgba(0, 0, 0, 0.1)"
            py="3.5rem"
            px="3rem"
            textAlign="left"
            borderRadius="1%"
          >
            <Box
              border="3px solid #814226"
              mb="2rem"
              borderRadius="5rem"
              w="40%"
            ></Box>
            <Text color="#B4A097" mb="2rem">
              “Course materials, past questions, quizzes and other academic
              materials to help you become a star student are provided here by
              lecturers with essential resources that would help you grow along
              line your studied. Course materials, past questions, quizzes and
              other academic materials to help.”{' '}
            </Text>

            <Flex justifyContent="space-between">
              <Box>
                <Text color="#814226" fontSize="1.1rem" fontWeight="600">
                  Elijah Oyindamola
                </Text>
                <Text color="#84736C">
                  B.sc Mass communication, Class of 17’
                </Text>
              </Box>
              <Flex columnGap=".5rem">
                <IconButton
                  aria-label="Left icon"
                  right={'2rem'}
                  borderRadius="50%"
                  bg="#FFF2EC"
                  transform="scale(.92)"
                  icon={<ArrowBackIcon color="#814226" />}
                />

                <IconButton
                  aria-label="Left icon"
                  right={'2rem'}
                  borderRadius="50%"
                  icon={<ArrowForwardIcon />}
                />
              </Flex>
            </Flex>
          </Box>

          <Flex {...mainImages}>
            <ChakraNextImage
              src="/assets/Alumni-1.png"
              w="300px"
              h="380px"
              borderRadius="5%"
            />
            <ChakraNextImage
              src="/assets/Alumni-2.png"
              w="200px"
              h="300px"
              borderRadius="5%"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Alumni;
