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

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Write: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  const [value, setValue] = useState('');
  const quill = useRef(null);

  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = () => {
      const file = input.files![0];
      const formData = new FormData();
      formData.append('upload', file);
      formData.append('type', 'image');

      const editor = quill.current?.getEditor();
      editor?.insertEmbed(editor.getSelection(), 'image', '');
    };
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
          ['image', 'video'],
          ['direction', 'align'],
        ],
        handlers: {
          image: imageHandler,
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
        <ReactQuill
          modules={modules}
          ref={quill}
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
