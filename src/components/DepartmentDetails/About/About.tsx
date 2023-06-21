import { Box, Text, Heading } from '@chakra-ui/react';
import { aboutHeading, aboutSummary, aboutBox } from './style';
import { mainBoxStyle } from '../../../styles/common';
import { deptGeneralBoxSpacing } from '../Overview/style';

const About = () => {
  return (
    <>
      <Box {...deptGeneralBoxSpacing}>
        <Box {...mainBoxStyle}>
          <Box {...aboutBox}>
            <Heading {...aboutHeading}>About the department</Heading>
            <Text {...aboutSummary}>
              The mass communication department was established in the year
              2002.The department offers undergraduate and postgraduate
              programmes that are designed to equip students with the knowledge
              and skills needed to excel in the field of communication. The
              department has a team of experienced and dedicated lecturers who
              are committed to providing quality education to their students.
              The curriculum is regularly updated to reflect changes in the
              industry and to ensure that students are exposed to the latest
              trends and best practices. The department also has
              state-of-the-art facilities such as a radio and television studio,
              a multimedia laboratory, and a library that is well-stocked with
              relevant materials.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
