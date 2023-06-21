import { Box, Text, Heading } from '@chakra-ui/react';
import { aboutHeading, aboutSummary, aboutBox } from './style';
import { mainBoxStyle } from '../../../styles/common';
import { deptGeneralBoxSpacing } from '../Overview/style';
import { FC } from 'react';

const About: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <Box {...deptGeneralBoxSpacing}>
        <Box {...mainBoxStyle}>
          <Box {...aboutBox}>
            <Heading {...aboutHeading}>About the department</Heading>
            <Text
              {...aboutSummary}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
