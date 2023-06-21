import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';
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
import { editorBox, headingInputStyle } from '../../styles/pages/write';
import { PlusSquareIcon } from '@chakra-ui/icons';

const Editor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});

const Write: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({}) => {
  const [value, setValue] = useState('');
  const [heading, setHeading] = useState('');
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

      <Box {...mainBoxStyle} my="100px">
        <Flex justify={'space-between'} mb="52px" align={'center'}>
          <FormLabel htmlFor="thumbnail">
            <PlusSquareIcon fontSize={'40px'} color="brown.deep" /> add a
            thumbnail
          </FormLabel>
          <Input
            type={'file'}
            accept="image/*"
            id="thumbnail"
            display={'none'}
          />

          <Flex gap="40px">
            <Button variant={'outline'}>Preview</Button>
            <Button variant={'dark'}>Publish</Button>
          </Flex>
        </Flex>

        <Box {...editorBox}>
          <Input
            {...headingInputStyle}
            value={heading}
            onChange={e => setHeading(e.target.value)}
          />

          <Editor
            editorRef={quill}
            modules={modules}
            theme="snow"
            value={value}
            placeholder="Enter your post content here"
            onChange={setValue}
          />
        </Box>

        <Flex>
          <Button variant={'dark'}>save to draft</Button>
        </Flex>
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
