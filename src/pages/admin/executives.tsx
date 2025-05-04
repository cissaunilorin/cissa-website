import {
  AddIcon,
  DeleteIcon,
  EditIcon,
  PlusSquareIcon,
} from '@chakra-ui/icons';
import {
  Box,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useMemo, useRef, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import AppModal from '../../components/AppModal/AppModal';
import { excoSchema, IExcoForm } from '../../forms/exco.form';
import { trpc } from '../../utils/trpc';
import dynamic from 'next/dynamic';
import ReactQuill from 'react-quill';
import ChakraNextImage from '../../components/chakra-nextimage';
import axios, { AxiosResponse } from 'axios';
import type { Executive } from '../../types/types';
import axiosInstance from '../../utils/axiosConfig';

const Editor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});

const defaultValues: IExcoForm = {
  imageUrl: '',
  name: '',
  description: '',
  email: '',
  position: '',
  order: '',
  type: 'CISSA',
};

const Executive: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ executives }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [excoId, setExcoId] = useState('');

  const {
    register,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IExcoForm>({
    resolver: zodResolver(excoSchema),
    mode: 'onChange',
  });

  const router = useRouter();
  const toast = useToast();

  const createExco = trpc.exco.createExco.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
    onError() {
      setIsLoading(false);
    },
  });
  const updateExco = trpc.exco.updateExco.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
    onError() {
      setIsLoading(false);
    },
  });
  const deleteExco = trpc.exco.deleteExco.useMutation({
    onSuccess(res) {
      toast({
        position: 'top-right',
        status: 'success',
        description: 'exco has been deactivated',
        isClosable: true,
        duration: 5000,
      });

      setTimeout(() => {
        router.reload();
      }, 5000);
    },
  });

  const [photo, setPhoto] = useState('');

  const onSubmit = () => {
    setIsLoading(true);
    setValue('imageUrl', photo);
    const data = getValues();

    if (isNew) {
      createExco.mutate(data);
    } else {
      updateExco.mutate({ id: excoId, ...data });
    }
  };

  const [value, setEdValue] = useState('');
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
          ['direction', 'align'],
        ],
      },
    }),
    []
  );

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

  return (
    <>
      <Head>
        <title>Executives - CISSA</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading='Add New StakeHolder'
        isSubmitting={isLoading}
        onClick={onSubmit}
        w='800px'>
        {photo ? (
          <Box position={'relative'} mb='20px'>
            <CloseButton
              position={'absolute'}
              right={'10px'}
              top={'10px'}
              zIndex={10}
              onClick={async () => {
                const splitStr = photo.split('org/image/');
                // console.log(photo, splitStr);

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
              w='25%' 
              css={{ aspectRatio: '1/1' }} 
              alt="Executive profile image"
            />
          </Box>
        ) : (
          <>
            <FormLabel htmlFor='thumbnail'>
              <PlusSquareIcon fontSize={'30px'} color='brown.deep' /> add image
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
        <FormControl isRequired isInvalid={!!errors.name?.message} mb={'25px'}>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            type={'text'}
            placeholder='Name'
            {...register('name')}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.email?.message} mb={'25px'}>
          <FormLabel htmlFor='Email'>Email</FormLabel>
          <Input
            id='Email'
            type={'email'}
            disabled={!isNew}
            placeholder='Email'
            {...register('email')}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.position?.message}
          mb={'25px'}>
          <FormLabel htmlFor='position'>Position</FormLabel>
          <Input
            id='position'
            type={'text'}
            placeholder='position'
            defaultValue={2}
            {...register('position')}
          />
          <FormErrorMessage>{errors.position?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.order?.message} mb={'25px'}>
          <FormLabel htmlFor='order'>Order</FormLabel>
          <Input
            id='order'
            type={'number'}
            placeholder='Order'
            defaultValue={2}
            {...register('order')}
          />
          <FormErrorMessage>{errors.order?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.type?.message} mb={'25px'}>
          <FormLabel htmlFor='Type'>Type</FormLabel>
          <Select placeholder='Type' {...register('type')}>
            {['CISSA', 'SRC', 'STAFF'].map((val, key) => (
              <option key={key} value={val}>
                {val}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.description?.message}>
          <FormLabel htmlFor='description'>About</FormLabel>

          <Editor
            editorRef={quill}
            modules={modules}
            theme='snow'
            value={value}
            placeholder='Enter your post content here'
            onChange={(val) => {
              setEdValue(val);
              setValue('description', val);
            }}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
      </AppModal>

      <Box py='50px'>
        <Box width={'1200px'} maxW={'100%'} m='0 auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='brown'>
              <TableCaption>Excos</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Position</Th>
                  <Th>Type</Th>
                  <Th>Role</Th>
                  <Th>Order</Th>
                  <Th>
                    <IconButton
                      aria-label='add new'
                      variant='outline'
                      icon={<AddIcon />}
                      onClick={() => {
                        Object.entries(defaultValues).forEach(([key, val]) =>
                          setValue<any>(key, val)
                        );
                        setEdValue('');
                        setPhoto('');
                        setIsNew(true);
                        onOpen();
                      }}
                    />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {executives.map((exco) => (
                  <Tr key={exco.id}>
                    <Td>{exco.user?.name}</Td>
                    <Td>{exco.user?.email}</Td>
                    <Td>{exco.position}</Td>
                    <Td>{exco.type}</Td>
                    <Td>{exco.user?.role}</Td>
                    <Td>{exco.order}</Td>
                    <Td>
                      <IconButton
                        aria-label='add new'
                        variant='outline'
                        mr='10px'
                        icon={<EditIcon />}
                        onClick={() => {
                          setExcoId(exco.id);
                          setValue('name', exco.user?.name || '');
                          setValue('email', exco.user?.email || '');
                          setValue('position', exco.position);
                          setValue('description', exco.description);
                          setEdValue(exco.description);
                          setValue('type', exco.type);
                          setValue('order', `${exco.order}`);
                          setValue('imageUrl', exco.imageUrl);
                          setPhoto(exco.imageUrl);

                          setIsNew(false);
                          onOpen();
                        }}
                      />
                      <IconButton
                        aria-label='delete'
                        variant='outline'
                        icon={<DeleteIcon />}
                        onClick={() => {
                          const confirm = window.confirm(
                            `you're about to deactivate ${exco.user?.name}`
                          );
                          if (confirm) deleteExco.mutate({ id: exco.id });
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
  const res: AxiosResponse<{ exco: Executive[] }, any> =
    await axiosInstance.get(`/api/user/executive`);
  const executives = res.data.exco;

  return {
    props: {
      executives,
    },
  };
};

export default Executive;
