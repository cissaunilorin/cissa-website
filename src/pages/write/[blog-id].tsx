import {
  Box,
  Button,
  CloseButton,
  Flex,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { mainBoxStyle } from '../../styles/common';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { imageHandler, videoHandler } from '../../utils/editorHandler';
import { editorBox, headingInputStyle } from '../../styles/pages/write';
import { PlusSquareIcon } from '@chakra-ui/icons';
import ChakraNextImage from '../../components/chakra-nextimage';
import axios from 'axios';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';
import { prisma } from '../../server/lib/prisma';
import { Blog } from '@prisma/client';

const Editor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});

const Write: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ isNew, blog }) => {
  const [value, setValue] = useState('');
  const [heading, setHeading] = useState('');
  const [photo, setPhoto] = useState('');
  // const [p, setP] = useState<File>();
  const quill = useRef<ReactQuill>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [draft, setDraft] = useState(false);

  const blogImgHandler = async (p?: File) => {
    if (p) {
      const formData = new FormData();
      formData.append('type', 'image');
      formData.append('upload', p);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BUCKET}/upload`,
          formData
        );

        setPhoto(`${process.env.NEXT_PUBLIC_BUCKET}${res.data.fileUrl}`);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ script: 'sub' }, { script: 'super' }],
          ['background', 'color'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'code', 'blockquote', 'code-block'],
          ['image' /* 'video' */],
          ['direction', 'align'],
        ],
        handlers: {
          image: async () => await imageHandler(quill),
          // video: async () => await videoHandler(quill),
        },
      },
    }),
    []
  );

  const router = useRouter();

  const createBlog = trpc.blog.createBlogPost.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.replace(`/write/${res.id}`);
    },
    onError() {
      setIsLoading(false);
    },
  });
  const updateBlog = trpc.blog.updateBlogPost.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
    onError() {
      setIsLoading(false);
    },
  });

  const publish = () => {
    setIsLoading(true);

    if (isNew) {
      createBlog.mutate({
        content: value,
        imageUrl: photo,
        heading,
        draft,
      });
    } else {
      updateBlog.mutate({
        id: blog?.id || '',
        content: value,
        imageUrl: photo,
        heading,
        draft,
      });
    }
  };

  useEffect(() => {
    if (blog) {
      setValue(blog.content);
      setPhoto(blog.imageUrl);
      setHeading(blog.heading);
      setDraft(blog.draft);
    }
  }, [blog]);

  return (
    <>
      <Head>
        <title>CIS - write</title>
      </Head>

      <Box {...mainBoxStyle} my='100px'>
        <Flex justify={'space-between'} gap='52px' align={'flex-start'}>
          <Box flex={1}>
            {photo ? (
              <Box position={'relative'}>
                <CloseButton
                  position={'absolute'}
                  right={'10px'}
                  top={'10px'}
                  zIndex={10}
                  onClick={async () => {
                    const splitStr = photo.split('org/image/');
                    console.log(photo, splitStr);

                    if (splitStr[1]) {
                      try {
                        await axios.post(
                          `${process.env.NEXT_PUBLIC_BUCKET}/delete`,
                          {
                            url: splitStr[1],
                            type: 'image',
                          }
                        );
                        setPhoto('');
                      } catch (err) {
                        console.error(err);
                      }
                    } else {
                      setPhoto('');
                    }
                  }}
                />
                <ChakraNextImage
                  src={photo}
                  w='100%'
                  css={{ aspectRatio: '4/1' }}
                />
              </Box>
            ) : (
              <>
                <FormLabel htmlFor='thumbnail'>
                  <PlusSquareIcon fontSize={'30px'} color='brown.deep' /> add a
                  thumbnail
                </FormLabel>
                <Input
                  type={'file'}
                  accept='image/*'
                  id='thumbnail'
                  display={'none'}
                  onChange={async (e) => {
                    if (e.target.files) {
                      // setP();
                      setPhoto(URL.createObjectURL(e.target.files[0]));
                      await blogImgHandler(e.target.files[0]);
                    }
                  }}
                />
              </>
            )}

            <Box {...editorBox}>
              <Input
                {...headingInputStyle}
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />

              <Editor
                editorRef={quill}
                modules={modules}
                theme='snow'
                value={value}
                placeholder='Enter your post content here'
                onChange={setValue}
              />
            </Box>

            <Flex>
              <Button variant={'dark'} onClick={() => setDraft(!draft)}>
                {draft ? 'remove from' : 'save to'} draft
              </Button>
            </Flex>
          </Box>

          <Flex gap='10px' direction={'column'}>
            <Button
              disabled={isNew}
              variant={'outline'}
              onClick={() => {
                if (!isNew) router.push(`/blog/${blog?.id}?preview=true`);
              }}>
              Preview
            </Button>
            <Button variant={'dark'} onClick={publish} isLoading={isLoading}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const blogId = ctx.query['blog-id'] as string;

  if (blogId === 'new')
    return {
      props: {
        isNew: true,
      },
    };

  const blogRes = await prisma.blog.findUnique({
    where: { id: blogId },
  });

  const blog: Blog = JSON.parse(JSON.stringify(blogRes));

  return {
    props: {
      isNew: false,
      blog,
    },
  };
};

export default Write;
