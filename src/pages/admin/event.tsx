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
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppModal from '../../components/AppModal/AppModal';
import { EventSchema, IEventForm } from '../../forms/event.form';
import { trpc } from '../../utils/trpc';
import ChakraNextImage from '../../components/chakra-nextimage';
import axios, { AxiosResponse } from 'axios';
import moment from 'moment';
import axiosInstance from '../../utils/axiosConfig';
import { Event } from '../../types/types';

const defaultValues: IEventForm = {
  date: '',
  venue: '',
  imageUrl: '',
  link: '',
  price: '',
  title: '',
};

const Events: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ events }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [eventId, setEventId] = useState('');
  const [photo, setPhoto] = useState('');

  const {
    register,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IEventForm>({
    resolver: zodResolver(EventSchema),
    mode: 'onChange',
  });

  const router = useRouter();
  const toast = useToast();

  const createEvent = trpc.events.createEvent.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });
  const updateEvent = trpc.events.updateEvent.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });
  const deleteEvent = trpc.events.deleteEvent.useMutation({
    onSuccess(res) {
      toast({
        position: 'top-right',
        status: 'success',
        description: 'event has been deleted',
        isClosable: true,
        duration: 5000,
      });

      setTimeout(() => {
        router.reload();
      }, 5000);
    },
  });

  const onSubmit = () => {
    setIsLoading(true);
    const data = getValues();

    if (isNew) {
      createEvent.mutate({ ...data, imageUrl: photo });
    } else {
      updateEvent.mutate({ id: eventId, ...data, imageUrl: photo });
    }
  };

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
        <title>Events - CISSA</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading='Add New Event'
        isSubmitting={isLoading}
        onClick={onSubmit}>
        {photo ? (
          <Box position={'relative'} w='50%'>
            <ChakraNextImage
              src={photo}
              w='100%'
              css={{ aspectRatio: '2/1' }}
            />
            <CloseButton
              position={'absolute'}
              right={'5px'}
              top={'5px'}
              zIndex={10}
              onClick={async () => {
                const splitStr = photo.split('org/image/');

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
        <FormControl isRequired isInvalid={!!errors.date?.message} mb={'25px'}>
          <FormLabel htmlFor='eventDate'>date</FormLabel>
          <Input
            id='eventDate'
            type={'date'}
            placeholder='Event Date'
            {...register('date')}
          />
          <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.venue?.message} mb={'25px'}>
          <FormLabel htmlFor='venue'>venue</FormLabel>
          <Input
            id='venue'
            type={'text'}
            placeholder='venue'
            {...register('venue')}
          />
          <FormErrorMessage>{errors.venue?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.title?.message} mb={'25px'}>
          <FormLabel htmlFor='title'>title</FormLabel>
          <Input
            id='title'
            type={'text'}
            placeholder='title'
            {...register('title')}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.link?.message} mb={'25px'}>
          <FormLabel htmlFor='link'>link</FormLabel>
          <Input
            id='link'
            type={'text'}
            placeholder='link'
            {...register('link')}
          />
          <FormErrorMessage>{errors.link?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.price?.message} mb={'25px'}>
          <FormLabel htmlFor='price'>price</FormLabel>
          <Input
            id='price'
            type={'text'}
            placeholder='price'
            {...register('price')}
          />
          <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
        </FormControl>
      </AppModal>

      <Box py='50px'>
        <Box width={'1200px'} maxW={'100%'} m='0 auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='brown'>
              <TableCaption>Events</TableCaption>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>title</Th>
                  <Th>Venue</Th>
                  <Th>price</Th>
                  {/* <Th>link</Th> */}
                  <Th>
                    <IconButton
                      aria-label='add new'
                      variant='outline'
                      icon={<AddIcon />}
                      onClick={() => {
                        Object.entries(defaultValues).forEach(([key, val]) =>
                          setValue<any>(key, val)
                        );
                        setIsNew(true);
                        onOpen();
                      }}
                    />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {events.map((each) => (
                  <Tr key={each.id}>
                    <Td>{moment(each.date).format('MMMM Do, Y')}</Td>
                    <Td>{each.title}</Td>
                    <Td>{each.venue}</Td>
                    <Td>{each.price}</Td>
                    <Td>
                      <IconButton
                        aria-label='add new'
                        variant='outline'
                        mr='10px'
                        icon={<EditIcon />}
                        onClick={() => {
                          setEventId(each.id);
                          Object.entries(each).forEach(([key, val]) =>
                            setValue<any>(key, val)
                          );
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
                            `you're about to delete ${each.venue} , deleting a is irreversible`
                          );
                          if (confirm) deleteEvent.mutate({ id: each.id });
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
  const res: AxiosResponse<{ event: Event[] }, any> = await axiosInstance.get(
    `/api/event/`
  );
  const events = res.data.event;

  return {
    props: {
      events,
    },
  };
};

export default Events;
