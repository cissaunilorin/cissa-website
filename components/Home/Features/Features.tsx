import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import { featureText } from './styles';

const Features: FC = () => {
  return (
    <Box as="section" mt={'118px'} mb={'104px'}>
      <Box {...mainBoxStyle}>
        <Heading as={'h2'} {...heading2Style} textAlign="center" mb={'8px'}>
          Features
        </Heading>
        <Text {...featureText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <Flex></Flex>
      </Box>
    </Box>
  );
};

export default Features;
