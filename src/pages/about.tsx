import Department from '../components/About/Department/Department';
import FacultyLeadership from '../components/About/FacultyLeadership/FacultyLeadership';
import CISSA from '../components/About/CISSA/CISSA';
import Overview from '../components/About/Overview/Overview';
import { NextPage } from 'next';
import SRC from '../components/About/SRCC/SRC';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

const About: NextPage = () => (
  <>
    <Head>
      <title>About us - CISSA</title>
    </Head>

    <Overview />
    <Department />
    <FacultyLeadership />
    <CISSA />
    <SRC />
    <Box mb='50px' />
  </>
);

export default About;
