import Department from '../components/About/Department/Department';
import FacultyLeadership from '../components/About/FacultyLeadership/FacultyLeadership';
import CISSA from '../components/About/CISSA/CISSA';
import Overview from '../components/About/Overview/Overview';
import { NextPage } from 'next';
import SRC from '../components/About/SRCC/SRC';
import { Box } from '@chakra-ui/react';

const About: NextPage = () => (
  <>
    <Overview />
    <Department />
    <FacultyLeadership />
    <CISSA />
    <SRC />
    <Box mb="50px" />
  </>
);

export default About;
