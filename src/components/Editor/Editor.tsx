import { FC, LegacyRef } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';

interface IEditor extends ReactQuillProps {
  editorRef: LegacyRef<ReactQuill>;
}

const Editor: FC<IEditor> = ({ editorRef, ...props }) => {
  return <ReactQuill {...props} ref={editorRef} />;
};

export default Editor;
