import {
  Avatar,
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import ChakraNextImage from '../../../components/chakra-nextimage';
import {
  FaBookmark,
  FaEllipsisH,
  FaFacebook,
  FaHandshake,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import {
  blogAuthorDetailsWrapper,
  blogAuthorProps,
  blogAvatarProps,
  blogButton,
  blogContentProps,
  blogDateProps,
  blogDetailsFlex,
  blogIconsFlex,
  blogimageProps,
  bottomDetails,
  bottomDetailsProps,
  bottomDetailsWrapper,
  bottomIconsWrapper,
  bottomTextWrapper,
  buttonFlex,
  headerOptions,
  headerText,
  listItemProps,
  listProps,
  mainBlogWrapper,
} from '../../../styles/blog';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { prisma } from '../../../server/lib/prisma';
import moment from 'moment';
import Head from 'next/head';

const BlogPost: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog?.heading} - CISSA</title>
      </Head>

      <Box {...mainBlogWrapper}>
        <Text {...headerText} fontSize={{ base: '22px', md: '34px' }}>
          {blog?.heading}
        </Text>
        <Flex {...headerOptions}>
          <Flex {...blogDetailsFlex}>
            <Avatar name={blog?.author.name} {...blogAvatarProps} />
            <Flex flexDir='column' marginInlineStart='4'>
              <Text {...blogAuthorProps}>{blog?.author.name}</Text>
              <Text {...blogDateProps}>
                {moment(blog?.createdAt).format('MMM Do, YYYY')}
              </Text>
            </Flex>
          </Flex>
          <Flex {...blogIconsFlex} my={{ base: '5', md: '0' }}>
            <FaTwitter size='26' />
            <FaLinkedin size='26' />
            <FaFacebook size='26' />
            <FaBookmark size='26' />
            {/* <FaEllipsisH size='26' /> */}
          </Flex>
        </Flex>

        <ChakraNextImage src={blog?.imageUrl || ''} {...blogimageProps} />

        <Text
          {...blogContentProps}
          dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
        />

        <Flex {...buttonFlex}>
          {blog?.blogTag.map((tag) => (
            <Button {...blogButton} key={tag.tag.id}>
              {tag.tag.title}
            </Button>
          ))}
        </Flex>
        <Flex {...bottomDetails}>
          <Flex {...bottomDetailsWrapper}>
            <Flex {...blogDetailsFlex}>
              <FaHandshake size='30' />
              <Text {...bottomTextWrapper}>2 claps</Text>
            </Flex>
            <Flex {...bottomIconsWrapper}>
              <FaTwitter size='26' />
              <FaLinkedin size='26' />
              <FaFacebook size='26' />
              <FaBookmark size='26' />
              {/* <FaEllipsisH size='26' /> */}
            </Flex>
          </Flex>
        </Flex>
        <Flex {...blogAuthorDetailsWrapper}>
          <Avatar name={blog?.author.name} {...blogAvatarProps} />

          <Flex {...bottomDetailsProps}>
            <Text {...blogDateProps}>WRITTEN BY</Text>
            <Text {...blogAuthorProps}>{blog?.author.name}</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const id = ctx.query['blog-id'] as string;
  const preview = ctx.query['preview'] as string;

  console.log(ctx.req.headers.referer);

  if (preview === 'true' && ctx.req.headers.referer?.includes(`/write/${id}`)) {
    const blogRes = await prisma.blog.findFirst({
      include: {
        author: true,
        blogTag: {
          include: {
            tag: true,
          },
        },
      },
      where: { id },
    });
    const blog: Readonly<typeof blogRes> = JSON.parse(JSON.stringify(blogRes));
    return {
      props: {
        blog,
      },
    };
  }
  const blogRes = await prisma.blog.findFirst({
    include: {
      author: true,
      blogTag: {
        include: {
          tag: true,
        },
      },
    },
    where: { slug: id, published: true, draft: false },
  });
  const blog: Readonly<typeof blogRes> = JSON.parse(JSON.stringify(blogRes));

  return {
    props: {
      blog,
    },
  };
};

export default BlogPost;
