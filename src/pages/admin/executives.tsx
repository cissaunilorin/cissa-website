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
import { ExcoType } from '@prisma/client';
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
import { useForm } from 'react-hook-form';
import { excoSchema, IExcoForm } from '../../forms/exco.form';
import { prisma } from '../../server/lib/prisma';
import { trpc } from '../../utils/trpc';

const defaultValues: IExcoForm = {
  name: '',
  description: '',
  email: '',
  position: '',
  type: ExcoType.CISSA,
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

  const createCourse = trpc.course.createCourse.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });
  const updateCourse = trpc.course.updateCourse.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
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

  const onSubmit = () => {
    setIsLoading(true);
    const data = getValues();

    if (isNew) {
      // createCourse.mutate(data);
    } else {
      // updateCourse.mutate(data);
    }
  };
  return (
    <>
      <Head>
        <title>faculty - CIS</title>
      </Head>

      {/* <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading="Add New Course"
        isSubmitting={isLoading}
        onClick={onSubmit}
      >
        <FormControl isRequired isInvalid={!!errors.code?.message} mb={'25px'}>
          <FormLabel htmlFor="courseCode">Course code</FormLabel>
          <Input
            id="courseCode"
            type={'text'}
            placeholder="Course code"
            {...register('code')}
          />
          <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.title?.message} mb={'25px'}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            type={'text'}
            placeholder="Title"
            {...register('title')}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        
        <FormControl
          isRequired
          isInvalid={!!errors.credit?.message}
          mb={'25px'}
        >
          <FormLabel htmlFor="credit">Course credit</FormLabel>
          <Input
            id="credit"
            type={'number'}
            placeholder="Course credit"
            defaultValue={2}
            {...register('credit')}
          />
          <FormErrorMessage>{errors.credit?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.status?.message}>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select placeholder="Status" {...register('status')}>
            <option value="R">Required</option>
            <option value="E">Elective</option>
            <option value="C">Compulsory</option>
          </Select>
          <FormErrorMessage>{errors.status?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.departmentId?.message}>
          <FormLabel htmlFor="department">Department</FormLabel>
          <Select
            id="department"
            placeholder="Department"
            {...register('departmentId')}
          >
            {departments.map(cur => (
              <option value={cur.id} key={cur.shortName}>
                {cur.shortName}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.departmentId?.message}</FormErrorMessage>
        </FormControl>
      </AppModal> */}

      <Box py="50px">
        <Box width={'1200px'} maxW={'100%'} m="0 auto">
          <TableContainer>
            <Table variant="striped" colorScheme="brown">
              <TableCaption>Excos</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Position</Th>
                  <Th>Type</Th>
                  <Th>Role</Th>
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
                {executives.map(exco => (
                  <Tr key={exco.id}>
                    <Td>{exco.user.name}</Td>
                    <Td>{exco.user.email}</Td>
                    <Td>{exco.position}</Td>
                    <Td>{exco.type}</Td>
                    <Td>{exco.user.role}</Td>
                    <Td>
                      <IconButton
                        aria-label="add new"
                        variant="outline"
                        mr="10px"
                        icon={<EditIcon />}
                        onClick={() => {
                          // setCourseCode(each.code);
                          // Object.entries(each).forEach(([key, val]) =>
                          //   setValue<any>(key, val)
                          // );
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
                            `you're about to deactivate ${exco.user.name}`
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
  const executives = await prisma.executive.findMany({
    include: { user: true },
  });

  return {
    props: {
      executives,
    },
  };
};

export default Executive;
