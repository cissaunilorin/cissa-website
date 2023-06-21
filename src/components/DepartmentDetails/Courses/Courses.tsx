import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { coursesHeading, courseBoxes, courseLvl, courseList } from './style';
import { mainBoxStyle } from '../../../styles/common';
import { deptGeneralBoxSpacing } from '../Overview/style';
const departmentCourses = [
  {
    level: '100',
    codes: [
      {
        code: 'mac101',
      },
    ],
  },
  {
    level: '200',
    codes: [
      {
        code: 'mac101',
      },
    ],
  },
  {
    level: '300',
    codes: [
      {
        code: 'mac101',
      },
    ],
  },
  {
    level: '400',
    codes: [
      {
        code: 'mac101',
      },
    ],
  },
];

// const courseCodes =
const Courses = () => {
  return (
    <>
      <Box {...deptGeneralBoxSpacing}>
        <Box {...mainBoxStyle}>
          <Box>
            <>
              <Heading {...coursesHeading}>Courses</Heading>
              <Box {...courseBoxes}>
                {departmentCourses.map(dept => {
                  return (
                    <Box key={dept.level}>
                      <Text {...courseLvl}>{dept.level}LVL</Text>
                      <Flex {...courseList}>
                        <Flex {...courseList}>
                          {dept.codes.map(code => code.code)}
                        </Flex>
                      </Flex>
                    </Box>
                  );
                })}
              </Box>
            </>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Courses;
