import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import About from '../../components/DepartmentDetails/About/About';
import Overview from '../../components/DepartmentDetails/Overview/Overview';
import Courses from '../../components/DepartmentDetails/Courses/Courses';
// import HOD from '../../components/DepartmentDetails/HOD/HOD';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

const DDP: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  department,
}) => (
  <>
    <Head>
      <title>{department?.name} - CISSA</title>
    </Head>

    <Overview name={department?.name || ''} />
    {/* <HOD /> */}
    <About text={department?.about || ''} />
    <Courses courses={department?.Course || []} />
  </>
);

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const shortName = ctx.query['short-code'] as string;

  const department = await prisma?.department.findUnique({
    include: { Course: true },
    where: { shortName },
  });

  return {
    props: {
      department,
    },
  };
};

export default DDP;
