import { Box, Button } from '@chakra-ui/react';
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
import { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { imageHandler, videoHandler } from '../../utils/editorHandler';

const Editor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});

const Write: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  const [value, setValue] = useState('');
  const quill = useRef<ReactQuill>(null);

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
          ['image', 'video'],
          ['direction', 'align'],
        ],
        handlers: {
          image: async () => await imageHandler(quill),
          video: async () => await videoHandler(quill),
        },
      },
    }),
    []
  );

  return (
    <>
      <Head>
        <title>CIS - write</title>
      </Head>

      <Box {...mainBoxStyle}>
        <Editor
          editorRef={quill}
          modules={modules}
          theme="snow"
          value={value}
          placeholder="Enter your post content here"
          onChange={setValue}
        />
      </Box>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  return {
    props: {},
  };
};

export default Write;
