import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import {
  aboutPrimaryHeading,
  aboutSectionHistory,
} from '../../../styles/pages/about';
import ChakraNextImage from '../../chakra-nextimage';
import { featureText } from '../../Home/Facts/styles';
import {
  aboutDepartmentProps,
  departmentBoxHeading,
  departmentBoxProps,
  departmentBoxSummary,
  iconDepartmentBoxProps,
} from './style';

const Departments = [
  {
    id: 1,
    heading: 'Information and Communicaton Science',
    summary:
      'Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....',
    more: 'Learn more',
  },
  {
    id: 2,
    heading: 'Telecommunicaton Science',
    summary:
      'Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....',
    more: 'Learn more',
  },
  {
    id: 3,
    heading: 'Library & Information Science',
    summary:
      'Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....',
    more: 'Learn more',
  },
  {
    id: 4,
    heading: 'Computer Science',
    summary:
      'Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....',

    more: 'Learn more',
  },
  {
    id: 5,
    heading: 'Mass Communicaton ',
    summary:
      'Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....',
    more: 'Learn more',
  },
];

const Department: FC = () => {
  return (
    <Box {...aboutSectionHistory}>
      <Box {...mainBoxStyle}>
        <Box {...aboutDepartmentProps}>
          <Heading {...heading2Style} mb="20px">
            5 Awesome Departments.
          </Heading>
          <Text {...featureText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Text>
        </Box>
      </Box>

      <Flex {...mainBoxStyle} wrap={'wrap'} justify="center" gap="40px">
        {Departments.map(department => (
          <Box {...departmentBoxProps} key={department.id}>
            <Flex {...iconDepartmentBoxProps}>
              <ChakraNextImage
                src="/assets/Workbag.png"
                h={'30px'}
                w={'30px'}
              />
            </Flex>
            <Heading {...departmentBoxHeading}>{department.heading}</Heading>
            {/* <Text {...departmentBoxSummary}>{department.summary}</Text> */}
            <Text>
              {department.more}
              <ArrowForwardIcon />
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Department;
