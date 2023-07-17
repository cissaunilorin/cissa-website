import { ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import AppModal from '../../components/AppModal/AppModal';
import { prisma } from '../../server/lib/prisma';
import { trpc } from '../../utils/trpc';
import ChakraNextImage from '../../components/chakra-nextimage';
import moment from 'moment';
import { blogButton } from '../../styles/blog';

const Blog: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blogs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState<(typeof blogs)[number]>(blogs[0]);

  const router = useRouter();

  const publishBlog = trpc.blog.pubBlogPost.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });

  const onSubmit = () => {
    setIsLoading(true);

    publishBlog.mutate({ id: blogData.id, published: !blogData.published });
  };

  return (
    <>
      <Head>
        <title>Blogs - CISSA</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading={blogData?.heading}
        isSubmitting={isLoading}
        w='800px'
        actionBtn={blogData?.published ? 'unpublish' : 'publish'}
        onClick={onSubmit}>
        <ChakraNextImage
          src={blogData?.imageUrl}
          w='100%'
          css={{ aspectRatio: '4/1' }}
        />

        <Box
          dangerouslySetInnerHTML={{ __html: blogData?.content }}
          maxH={'40vh'}
          overflowY={'auto'}
          mt='12px'
          px='30px'
          mb='30px'
        />

        <Flex gap='10px' wrap='wrap'>
          {blogData.blogTag?.map((tag) => (
            <Button {...blogButton} key={tag.tag.id}>
              {tag.tag.title}
            </Button>
          ))}
        </Flex>

        <Text>written by {blogData?.author.name}</Text>
        <Text>time {moment(blogData?.createdAt).format('MMM Do, YYYY')}</Text>
      </AppModal>

      <Box py='50px'>
        <Box width={'1200px'} maxW={'100%'} m='0 auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='brown'>
              <TableCaption>Events</TableCaption>
              <Thead>
                <Tr>
                  <Th>created</Th>
                  <Th>heading</Th>
                  <Th>author</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {blogs.map((each) => (
                  <Tr key={each.id}>
                    <Td>{moment(each.createdAt).format('MMMM Do, Y')}</Td>
                    <Td>{each.heading}</Td>
                    <Td>{each.author.name}</Td>
                    <Td>
                      <IconButton
                        aria-label='add new'
                        variant='outline'
                        mr='10px'
                        icon={<ViewIcon />}
                        onClick={() => {
                          setBlogData(each);
                          onOpen();
                        }}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const blogRes = await prisma.blog.findMany({
    include: {
      author: true,
      blogTag: {
        include: {
          tag: true,
        },
      },
    },
  });

  const blogs: Readonly<typeof blogRes> = JSON.parse(JSON.stringify(blogRes));

  return {
    props: {
      blogs,
    },
  };
};

export default Blog;
