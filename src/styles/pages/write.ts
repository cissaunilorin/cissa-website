import { BoxProps, InputProps } from '@chakra-ui/react';

export const headingInputStyle: InputProps = {
  type: 'text',
  placeholder: 'Your title goes here',
  my: '20px',
  fontSize: '40px',
  lineHeight: '40px',
  p: '10px',
  h: 'unset',
  border: 'none',
  _focus: {
    shadow: 'none',
  },
  _placeholder: {
    color: 'rgba(0, 0, 0, 0.28)',
  },
};

export const editorBox: BoxProps = {
  mb: '20px',
  __css: {
    '& .quill': {
      boxShadow: ' 0px 12px 20px 6px rgba(0, 0, 0, 0.04)',
      p: '10px',
      borderRadius: '8px',
      backgroundColor: 'brown.trans',
    },
    '& .ql-toolbar.ql-snow': {
      border: 'none',
      borderBottom: '1px solid #CDA898',
    },
    '& .ql-container.ql-snow': {
      border: 'none',
    },
    '& .ql-editor': {
      height: '500px',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
};
