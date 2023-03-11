import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import SuperJSON from 'superjson';
import { heading2Style, mainBoxStyle } from '../../../styles/common';
import { aboutSectionHistory } from '../../../styles/pages/about';
import { trpc } from '../../../utils/trpc';
import ChakraNextImage from '../../chakra-nextimage';
import { featureText } from '../../Home/Facts/styles';
import {
  aboutDepartmentProps,
  departmentBoxHeading,
  departmentBoxProps,
  departmentBoxSummary,
  iconDepartmentBoxProps,
} from './style';

const Department: FC = () => {
  const { data, isLoading } = trpc.department.getAllDepartments.useQuery();

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

        <Flex wrap={'wrap'} justify="center" gap="40px">
          {!!data
            ? data.map(department => (
                <Box {...departmentBoxProps} key={department.id}>
                  <Flex {...iconDepartmentBoxProps}>
                    <ChakraNextImage
                      src="/assets/Workbag.png"
                      h={'30px'}
                      w={'30px'}
                    />
                  </Flex>
                  <Heading {...departmentBoxHeading}>{department.name}</Heading>
                  {/* <Text {...departmentBoxSummary}>{department.summary}</Text> */}

                  <Link
                    href={`/department/${department.shortName.toLowerCase()}`}
                    passHref
                  >
                    <Text>
                      Learn More
                      <ArrowForwardIcon />
                    </Text>
                  </Link>
                </Box>
              ))
            : [1, 2, 3].map(cur => (
                <Box key={cur} {...departmentBoxProps}>
                  <Skeleton {...iconDepartmentBoxProps} />
                  <Skeleton h="50px" mb="20px" />
                  <Skeleton h="30px" />
                </Box>
              ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Department;
