import Department from '../components/About/Department/Department';
import FacultyLeadership from '../components/About/FacultyLeadership/FacultyLeadership';
import CISSA from '../components/About/CISSA/CISSA';
import Overview from '../components/About/Overview/Overview';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import SRC from '../components/About/SRCC/SRC';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { AxiosResponse } from 'axios';
import axiosInstance from '../utils/axiosConfig';
import { Executive } from '../types/types';

const About: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ exco, department }) => {
  const staff = exco.filter((cur) => cur.type === 'STAFF');
  const cissa = exco.filter((cur) => cur.type === 'CISSA');
  const src = exco.filter((cur) => cur.type === 'SRC');

  return (
    <>
      <Head>
        <title>About us - CISSA</title>
      </Head>

      <Overview />

      {department && department.length > 0 && <Department data={department} />}

      {exco && staff.length > 0 && <FacultyLeadership staff={staff} />}

      {exco && cissa.length > 0 && <CISSA cissa={cissa} />}

      {exco && src.length > 0 && <SRC src={src} />}
      <Box mb='50px' />
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const [res, resDe]: [
    AxiosResponse<{ exco: Executive[] }, any>,
    AxiosResponse<{ department: Department[] }, any>
  ] = await Promise.all([
    axiosInstance.get(`/api/user/executive/`),
    axiosInstance.get(`/api/department/`),
  ]);
  const exco = res.data.exco;
  const department = resDe.data.department;

  return {
    props: {
      exco,
      department,
    },
  };
};

export default About;
