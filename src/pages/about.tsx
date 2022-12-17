import Department from '../components/About/Department/Department';
import FacultyLeadership from '../components/About/FacultyLeadership/FacultyLeadership';
import StudentBody from '../components/About/StudentBody/StudentBody';
import Overview from '../components/About/Overview/Overview';
import { NextPage } from 'next';

const About: NextPage = () => (
  <>
    <Overview />
    <Department />
    <FacultyLeadership />
    <StudentBody />
  </>
);

export default About;
