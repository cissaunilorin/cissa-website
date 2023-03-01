import axios from 'axios';
import { RefObject } from 'react';
import ReactQuill from 'react-quill';

export const imageHandler = async (quill: RefObject<ReactQuill>) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();
  input.onchange = async () => {
    const file = input.files![0];
    const formData = new FormData();
    formData.append('type', 'image');
    formData.append('upload', file);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BUCKET}/upload`,
      formData
    );

    const editor = quill.current?.getEditor();
    editor?.insertEmbed(
      editor?.getSelection()?.index as number,
      'image',
      `${process.env.NEXT_PUBLIC_BUCKET}${res.data.fileUrl}`
    );
  };
};

export const videoHandler = async (quill: RefObject<ReactQuill>) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'video/*');
  input.click();
  input.onchange = async () => {
    const file = input.files![0];
    const formData = new FormData();
    formData.append('type', 'video');
    formData.append('upload', file);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BUCKET}/upload`,
      formData
    );

    const editor = quill.current?.getEditor();
    editor?.insertEmbed(
      editor?.getSelection()?.index as number,
      'image',
      `${process.env.NEXT_PUBLIC_BUCKET}${res.data.fileUrl}`
    );
  };
};
