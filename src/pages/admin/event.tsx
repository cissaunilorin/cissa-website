import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
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
// import { Course } from '@prisma/client';
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
import { prisma } from '../../server/lib/prisma';
import { trpc } from '../../utils/trpc';

const defaultValues: IEventForm = {
  date: new Date(),
  venue: '',
};

const Events: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ events }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [eventId, setEventId] = useState('');

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
      createEvent.mutate(data);
    } else {
      updateEvent.mutate({ id: eventId, ...data });
    }
  };

  return (
    <>
      <Head>
        <title>events - CIS</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading="Add New Course"
        isSubmitting={isLoading}
        onClick={onSubmit}
      >
        <FormControl isRequired isInvalid={!!errors.date?.message} mb={'25px'}>
          <FormLabel htmlFor="eventDate">Event date</FormLabel>
          <Input
            id="eventDate"
            type={'date'}
            placeholder="Event Date"
            {...register('date')}
          />
          <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.venue?.message} mb={'25px'}>
          <FormLabel htmlFor="venue">Event venue</FormLabel>
          <Input
            id="venue"
            type={'text'}
            placeholder="Event venue"
            {...register('venue')}
          />
          <FormErrorMessage>{errors.venue?.message}</FormErrorMessage>
        </FormControl>
      </AppModal>

      <Box py="50px">
        <Box width={'1200px'} maxW={'100%'} m="0 auto">
          <TableContainer>
            <Table variant="striped" colorScheme="brown">
              <TableCaption>Courses</TableCaption>
              <Thead>
                <Tr>
                  {/* <Th>Id</Th> */}
                  <Th>Date</Th>
                  <Th>Venue</Th>
                  <Th>
                    <IconButton
                      aria-label="add new"
                      variant="outline"
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
                {events.map(each => (
                  <Tr key={each.id}>
                    {/* <Td>{each.id}</Td> */}
                    <Td>{each.date.toDateString()}</Td>
                    <Td>{each.venue}</Td>
                    <Td>
                      <IconButton
                        aria-label="add new"
                        variant="outline"
                        mr="10px"
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
                        aria-label="delete"
                        variant="outline"
                        icon={<DeleteIcon />}
                        onClick={() => {
                          const confirm = window.confirm(
                            `you're about to delete ${each.venue} , deleting a event is irreversible`
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
  const events = await prisma.event.findMany();

  return {
    props: {
      events,
    },
  };
};

export default Events;
