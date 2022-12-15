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
import { courseSchema, ICourseForm } from '../../forms/course.form';
import { prisma } from '../../server/lib/prisma';
import { trpc } from '../../utils/trpc';

const defaultValues: ICourseForm = {
  code: '',
  title: '',
  credit: 2,
  status: '',
  department: '',
};

const Faculty: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ courses }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [courseCode, setCourseCode] = useState('');

  const {
    register,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ICourseForm>({
    resolver: zodResolver(courseSchema),
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
  const deleteCourse = trpc.course.deleteCourse.useMutation({
    onSuccess(res) {
      toast({
        position: 'top-right',
        status: 'success',
        description: 'course has been deleted',
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
      createCourse.mutate(data);
    } else {
      updateCourse.mutate({ code: courseCode, ...data });
    }
  };

  return (
    <>
      <Head>
        <title>faculty - CIS</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading='Add New Course'
        isSubmitting={isLoading}
        onClick={onSubmit}
      >
        <FormControl isRequired isInvalid={!!errors.code?.message} mb={'25px'}>
          <FormLabel htmlFor='courseCode'>Course code</FormLabel>
          <Input
            id='courseCode'
            type={'text'}
            placeholder='Course code'
            {...register('code')}
          />
          <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.title?.message} mb={'25px'}>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input
            id='title'
            type={'text'}
            placeholder='Title'
            {...register('title')}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        {/* credit: z.number(), */}
        <FormControl
          isRequired
          isInvalid={!!errors.credit?.message}
          mb={'25px'}
        >
          <FormLabel htmlFor='credit'>Course credit</FormLabel>
          <Input
            id='credit'
            type={'number'}
            placeholder='Course credit'
            defaultValue={2}
            {...register('credit')}
          />
          <FormErrorMessage>{errors.credit?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.status?.message}>
          <Select placeholder='Select option'>
            <option value='option1'>Elective</option>
            <option value='option2'>Compulsory</option>
            <option value='option3'>Option 3</option>
          </Select>
          <FormLabel htmlFor='status'>Status</FormLabel>
          <Input
            id='status'
            type={'text'}
            placeholder='Status'
            {...register('status')}
          />
          <FormErrorMessage>{errors.status?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.department?.message}>
          <FormLabel htmlFor='department'>Department</FormLabel>
          <Input
            id='department'
            type={'text'}
            placeholder='Department'
            {...register('department')}
          />
          <FormErrorMessage>{errors.department?.message}</FormErrorMessage>
        </FormControl>
      </AppModal>

      <Box py='50px'>
        <Box width={'1200px'} maxW={'100%'} m='0 auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='brown'>
              <TableCaption>Courses</TableCaption>
              <Thead>
                <Tr>
                  <Th>Code</Th>
                  <Th>Title</Th>
                  <Th>Credit</Th>
                  <Th>Status</Th>
                  <Th>Department</Th>
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
                {courses.map((each) => (
                  <Tr key={each.code}>
                    <Td>{each.code}</Td>
                    <Td>{each.title}</Td>
                    <Td>{each.credit}</Td>
                    <Td>{each.status}</Td>
                    <Td>{each.department}</Td>
                    <Td>
                      <IconButton
                        aria-label='add new'
                        variant='outline'
                        mr='10px'
                        icon={<EditIcon />}
                        onClick={() => {
                          setCourseCode(each.code);
                          Object.entries(courseCode).forEach(([key, val]) =>
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
                            `you're about to delete ${each.code} ${each.title} department, deleting a department is irreversible`
                          );
                          if (confirm) deleteCourse.mutate({ code: each.code });
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
  const courses = await prisma.course.findMany();

  // console.log(departments);

  return {
    props: {
      courses,
    },
  };
};

export default Faculty;
