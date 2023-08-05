import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { coursesHeading, courseBoxes, courseLvl, courseList } from './style';
import { mainBoxStyle } from '../../../styles/common';
import { deptGeneralBoxSpacing } from '../Overview/style';
import { FC } from 'react';
import { Course } from '../../../types/types';

const level = ['100', '200', '300', '400'];

const Courses: FC<{ courses: Course[] }> = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <Box {...deptGeneralBoxSpacing}>
        <Box {...mainBoxStyle}>
          <Box>
            <>
              <Heading {...coursesHeading}>Courses</Heading>
              <Box {...courseBoxes}>
                {level.map((lvl) => {
                  return (
                    <Box key={lvl}>
                      <Text {...courseLvl}>{lvl}LVL</Text>
                      <Flex {...courseList}>
                        <Flex {...courseList}>
                          {courses.map((course) => {
                            if (course.code[3] === lvl[0]) return course.code;
                          })}
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
