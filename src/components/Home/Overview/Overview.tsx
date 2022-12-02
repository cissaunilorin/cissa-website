import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { mainBoxStyle } from '../../../styles/common';

const Overview: FC = () => {
  return (
    <Box as="section">
      <Flex>
        <Box
          h={'758px'}
          w={'100%'}
          bgImg={'url(/assets/ov-1.png)'}
          bgPos={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}
        ></Box>
      </Flex>
      <Box {...mainBoxStyle}></Box>
    </Box>
  );
};

export default Overview;
