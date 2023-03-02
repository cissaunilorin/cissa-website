import { NextPage } from 'next';
import About from '../components/DepartmentDetails/About/About';
import Overview from '../components/DepartmentDetails/Overview/Overview';
import Courses from '../components/DepartmentDetails/Courses/Courses';
import HOD from '../components/DepartmentDetails/HOD/HOD';

const DDP: NextPage = () => (
  <>
    <Overview />
    <HOD />
    <About />
    <Courses />
  </>
);

export default DDP;
