import {
  Box,
  Button,
  CloseButton,
  Flex,
  FormLabel,
  IconButton,
  Input,
  Text,
  useDisclosure,
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
import { AddIcon, PlusSquareIcon } from '@chakra-ui/icons';
import ChakraNextImage from '../../components/chakra-nextimage';
import axios, { AxiosResponse } from 'axios';
import { trpc } from '../../utils/trpc';
import { useRouter } from 'next/router';
import BlogTag from '../../components/BlogTag/BlogTag';
import { blogButton } from '../../styles/blog';
import { Blog, Tag } from '../../types/types';
import axiosInstance from '../../utils/axiosConfig';

const Editor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});

const Write: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ blog }) => {
  const [value, setValue] = useState('');
  const [heading, setHeading] = useState('');
  const [photo, setPhoto] = useState('');
  const [tags, setTags] = useState<Tag[]>();
  const quill = useRef<ReactQuill>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [save, setSave] = useState(true);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, isLoading: isTagLoading } = trpc.blog.getAllTags.useQuery();

  const [allTags, setAllTags] = useState<Tag[]>();
  useEffect(() => {
    if (!isTagLoading) setAllTags(data);
  }, [data, isTagLoading]);

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
        setSave(false);
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

  const updateBlog = trpc.blog.updateBlogPost.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      setSave(true);
    },
    onError() {
      setIsLoading(false);
      setSave(false);
    },
  });

  const publish = (draft: boolean) => {
    setIsLoading(true);

    updateBlog.mutate({
      id: blog?.id || '',
      content: value,
      imageUrl: photo,
      draft,
      heading,
      tags: tags?.map((cur) => cur.id),
    });
  };

  useEffect(() => {
    if (blog) {
      setValue(blog.content);
      setPhoto(blog.imageUrl);
      setHeading(blog.heading);

      if (blog.blogTag) {
        setTags(blog.blogTag.map((cur) => cur.tag));
      }
    }
  }, [blog]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!save) publish(true);
    }, 30000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Head>
        <title>write - CISSA</title>
      </Head>

      <BlogTag
        isOpen={isOpen}
        onClose={onClose}
        // onClick={(stags) => {
        //   setTags(stags);
        //   onClose();
        // }}
        selectedTags={tags}
        setSelectedTags={setTags}
        isLoading={isTagLoading}
        setAllTags={setAllTags}
        allTags={
          tags
            ? allTags?.filter((cur) => {
                const idx = tags.findIndex((cr) => cur.id === cr.id);
                return !(idx >= 0);
              })
            : allTags
        }
      />

      <Box {...mainBoxStyle} my='100px'>
        <Flex justify={'space-between'} gap='52px' align={'flex-start'}>
          <Box flex={'0 0 900px'}>
            {!save && isLoading && (
              <Text opacity={0.5} mb='10px'>
                saving to draft
              </Text>
            )}
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
                  alt={`Blog post thumbnail: ${heading}`}
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
                onChange={(e) => {
                  setHeading(e.target.value);
                  setSave(false);
                }}
              />

              <Editor
                editorRef={quill}
                modules={modules}
                theme='snow'
                value={value}
                placeholder='Enter your post content here'
                onChange={(val) => {
                  setSave(false);
                  setValue(val);
                }}
              />
            </Box>
          </Box>

          <Box>
            <Box mb='30px'>
              <Text mb='10px'>
                Tags{' '}
                <IconButton
                  icon={<AddIcon />}
                  size={'xs'}
                  variant={'outline'}
                  aria-label='add tag'
                  onClick={onOpen}
                />
              </Text>

              <Flex gap='10px' wrap='wrap' overflowY={'auto'}>
                {tags?.map((tag) => (
                  <Button
                    {...blogButton}
                    key={tag.id}
                    onClick={() => {
                      const allt = tags.filter((cur) => cur.id !== tag.id);
                      setTags(allt);
                    }}>
                    {tag.title}
                  </Button>
                ))}
              </Flex>
            </Box>

            <Flex gap='10px'>
              {save && (
                <Button
                  variant={'outline'}
                  onClick={() => {
                    router.push(`/blog/${blog?.id}?preview=true`);
                  }}>
                  Preview
                </Button>
              )}

              <Button
                variant={'dark'}
                onClick={() => {
                  publish(false);
                }}
                isLoading={isLoading}>
                Save
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const blogId = ctx.query['blog-id'] as string;
  const res: AxiosResponse<{ blog: Blog }, any> = await axiosInstance.get(
    `/api/blog/${blogId}?preview=true`
  );
  const blog = res.data.blog;

  delete blog.author;

  return {
    props: {
      blog,
    },
  };
};

export default Write;
