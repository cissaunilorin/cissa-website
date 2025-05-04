import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useRef, useState } from 'react';

type Course = {
  grade: string;
  no: number;
  unit: number;
};

/*CGPA Toast. Displays the final CGPA
 after user input is complete. */

const Calculator: NextPage = () => {
  /*initialized empty course and noOfCourses states */
  const [courses, setCourses] = useState<Course[]>([]);
  const [noOfCourses, setNoOfCourses] = useState(0);
  const toast = useToast();
  const countRef = useRef<HTMLInputElement>(null);

  const cgpaToast = (message: string) =>
    toast({
      duration: 6000,
      position: 'top',
      description: message,
      isClosable: true,
      status: 'success',
      // containerStyle: {
      //   border: '1px solid white',
      //   marginTop: '30px',
      //   color: 'white',
      //   backgroundColor: '#814226',
      // },
    });

  useMemo(() => {
    /*when the user inputs their total number of courses, an array is created
    that contains the same number of courses as the user input. The default value of
    course no is (array index + 1), grade is F (this is used as default as the users can have
      courses they have not received results for) and a course unit of 2 */

    let arr: Course[] = [];
    for (let i = 0; i < noOfCourses; i++) {
      let course: Course = { no: i + 1, grade: 'F', unit: 2 };
      arr.push(course);
    }
    setCourses(arr);
  }, [noOfCourses]);

  const handleCourseInput = () => {
    /*on course input, set the noOfCourses state to the
    value of what the user puts in */
    setNoOfCourses(parseInt(countRef.current!.value));
  };

  const handleGradeInput = (grade: string, index: number) => {
    /*on grade change, loop through each course in the courses list and upgrade
    the course's grade accordingly */
    const newCourseItems = courses.map((course) =>
      course.no === index ? { ...course, grade: grade } : course
    );
    setCourses(newCourseItems);
  };

  const toggleUnit = (index: number, value: 'increment' | 'decrement') => {
    if (value === 'increment') {
      /*on course unit increment, loop through each course in the courses list and increase
    the course's unit by 1 */
      const updatedcourses = courses.map((course) =>
        course.no === index ? { ...course, unit: course.unit + 1 } : course
      );
      setCourses(updatedcourses);
    } else if (value === 'decrement') {
      /*on course unit decrement, loop through each course in the courses list and decrease
    the course's unit by 1 */
      const updatedcourses = courses.map((course) =>
        course.no === index && course.unit! > 1
          ? { ...course, unit: course.unit - 1 }
          : course
      );
      setCourses(updatedcourses);
    }
  };

  const handleGPCalculation = () => {
    let totalScore = 0;
    let totalGradePoints = 0;

    /*calculate the total score of the user based on the 
    number of courses and the units each courses carry.*/

    for (let i = 0; i < noOfCourses; i++) {
      switch (courses[i].grade.toUpperCase()) {
        case 'A':
          totalScore += 5 * courses[i].unit;
          break;
        case 'B':
          totalScore += 4 * courses[i].unit;
          break;
        case 'C':
          totalScore += 3 * courses[i].unit;
          break;

        case 'D':
          totalScore += 2 * courses[i].unit;
          break;
        case 'E':
          totalScore += 1 * courses[i].unit;
          break;
        default:
          totalScore += 0 * courses[i].unit;
          break;
      }
    }

    /*calculate the total obtainable grade of the user based on the 
    number of courses and the units each courses carry.*/

    for (let i = 0; i < noOfCourses; i++) {
      totalGradePoints += courses[i].unit;
    }

    /*The CGPA is then generated from the total score divided
    by the total obtainable grade multiplied by the highest GP. In our case it's 5*/
    const CGPA = totalScore / totalGradePoints;
    /*0 divided by a number is Infinity. return 0 if the CGPA is not finite. */
    if (Number.isFinite(CGPA)) {
      cgpaToast(`Your CGPA is ${CGPA.toFixed(2)}.`);
    } else {
      cgpaToast(`Your CGPA is 0.00.`);
    }
  };
  return (
    <>
      <Head>
        <title>Calculate your cgpa - CISSA</title>
      </Head>

      <Box my={40} maxW={1200} mx='auto'>
        <Box className='app'>
          <Box textAlign='center'>
            <Heading>CGPA Calculator.</Heading>
            <Text className='info'>
              Enter the total number of courses you are offering here. Do not
              bother about courses with unreleased results as they will have a
              default score of 0.
            </Text>
            <Text>
              You are offering (
              {Number.isNaN(noOfCourses) || noOfCourses === 0 ? 0 : noOfCourses}
              ) courses.
            </Text>
          </Box>
          <Box
            className='form'
            display='flex'
            maxW='300px'
            pt={5}
            margin='auto'
            justifyContent='space-evenly'>
            <Input
              type='number'
              className='courses_no'
              placeholder='No Of Courses'
              maxW='250px'
              min={0}
              max={20}
              mr='4'
              ref={countRef}
            />
            <Button type='submit' onClick={handleCourseInput}>
              Go
            </Button>
          </Box>
          <Heading fontSize='2xl' opacity='90' textAlign='center' mt='6'>
            Grade -- Course Unit
          </Heading>
          {courses.map((course, index) => (
            <Flex
              key={index}
              className='course'
              mt='4'
              justify='center'
              alignItems='center'>
              <p className='index'>
                {' '}
                {index + 1}
              </p>
              <Select
                maxW='200px'
                mx={4}
                name=''
                id=''
                value={course.grade}
                className='grade'
                onChange={(e) => handleGradeInput(e.target.value, index + 1)}>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
              </Select>

              <Box fontSize='xl' mr='4' className='unit'>
                {course.unit}
              </Box>
              <div className='counter'>
                <Button
                  onClick={() => toggleUnit(index + 1, 'increment')}
                  className='inc'>
                  +
                </Button>
                <Button
                  onClick={() => toggleUnit(index + 1, 'decrement')}
                  ml='4'>
                  -
                </Button>
              </div>
            </Flex>
          ))}
          <Flex justifyContent='center' mt='8'>
            {courses.length > 0 && (
              <Button className='gp' onClick={handleGPCalculation}>
                Calculate GP
              </Button>
            )}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Calculator;
