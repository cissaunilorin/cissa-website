import { GetServerSidePropsContext } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { Blog } from '../../../types/types';
import axiosInstance from '../../../utils/axiosConfig';
import { AxiosResponse } from 'axios';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const res: AxiosResponse<{ blog: Blog[] }, any> = await axiosInstance.get(
    `/api/blog/`
  );
  const blogs = res.data.blog;

  const fields: ISitemapField[] = blogs.map((blog) => ({
    loc: `${process.env.SITE_URL}/blog/${blog.slug}`,
    lastmod: new Date(blog.createdAt).toISOString(),
  }));

  return getServerSideSitemap(fields);
};

const Site = () => {};
export default Site;
