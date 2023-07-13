import { GetServerSidePropsContext } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { prisma } from '../../../server/lib/prisma';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const blogs = await prisma.blog.findMany();

  const fields: ISitemapField[] = blogs.map((blog) => ({
    loc: `${process.env.SITE_URL}/blog/${blog.slug}`,
    lastmod: new Date(blog.createdAt).toISOString(),
  }));

  return getServerSideSitemap(fields);
};

const Site = () => {};
export default Site;
