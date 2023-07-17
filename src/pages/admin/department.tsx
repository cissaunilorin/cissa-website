import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
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
import { Department } from '@prisma/client';
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
import { SubmitHandler, useForm } from 'react-hook-form';
import AppModal from '../../components/AppModal/AppModal';
import { departmentSchema, IDepartmentForm } from '../../forms/department.form';
import { prisma } from '../../server/lib/prisma';
import { trpc } from '../../utils/trpc';
import ReactQuill from 'react-quill';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../components/Editor/Editor'), {
  ssr: false,
});
const defaultValues: IDepartmentForm = {
  matric: '',
  name: '',
  shortName: '',
  HOD: '',
  about: '',
};

const Faculty: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departments }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [depId, setDepId] = useState('');

  const {
    register,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IDepartmentForm>({
    resolver: zodResolver(departmentSchema),
    mode: 'onChange',
  });

  const router = useRouter();
  const toast = useToast();

  const createDepartment = trpc.department.createDepartment.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });
  const updateDepartment = trpc.department.updateDepartment.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });
  const deleteDepartment = trpc.department.deleteDepartment.useMutation({
    onSuccess(res) {
      toast({
        position: 'top-right',
        status: 'success',
        description: 'department has been deleted',
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
      createDepartment.mutate({ ...data, about: data.about || '' });
    } else {
      updateDepartment.mutate({ id: depId, ...data, about: data.about || '' });
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

  return (
    <>
      <Head>
        <title>Departments - CISSA</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading='Add New Department'
        isSubmitting={isLoading}
        onClick={onSubmit}
        w='800px'>
        <FormControl
          isRequired
          isInvalid={!!errors.shortName?.message}
          mb={'25px'}>
          <FormLabel htmlFor='shortname'>Short Name</FormLabel>
          <Input
            id='shortname'
            type={'text'}
            placeholder='short name'
            {...register('shortName')}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.name?.message} mb={'25px'}>
          <FormLabel htmlFor='name'>name</FormLabel>
          <Input
            id='name'
            type={'text'}
            placeholder='name'
            {...register('name')}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.matric?.message}
          mb={'25px'}>
          <FormLabel htmlFor='matric'>Maric</FormLabel>
          <Input
            id='matric'
            type={'text'}
            placeholder='matric'
            {...register('matric')}
          />
          <FormErrorMessage>{errors.matric?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.HOD?.message} mb={'25px'}>
          <FormLabel htmlFor='subDean'>Head of department</FormLabel>
          <Input
            id='subDean'
            type={'text'}
            placeholder='Head of department'
            {...register('HOD')}
          />
          <FormErrorMessage>{errors.HOD?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.about?.message}>
          <FormLabel htmlFor='about'>About</FormLabel>

          <Editor
            editorRef={quill}
            modules={modules}
            theme='snow'
            value={value}
            placeholder='Enter your post content here'
            onChange={(val) => {
              setEdValue(val);
              setValue('about', val);
            }}
          />
          <FormErrorMessage>{errors.about?.message}</FormErrorMessage>
        </FormControl>
      </AppModal>

      <Box py='50px'>
        <Box width={'1200px'} maxW={'100%'} m='0 auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='brown'>
              <TableCaption>Departments</TableCaption>
              <Thead>
                <Tr>
                  <Th>Short Name</Th>
                  <Th>Name</Th>
                  <Th>Matric</Th>
                  <Th>Sub Dean</Th>
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
                        setIsNew(true);
                        onOpen();
                      }}
                    />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {departments.map((dep) => (
                  <Tr key={dep.id}>
                    <Td>{dep.shortName}</Td>
                    <Td>{dep.name}</Td>
                    <Td>{dep.matric}</Td>
                    <Td>{dep.HOD}</Td>
                    <Td>
                      <IconButton
                        aria-label='add new'
                        variant='outline'
                        mr='10px'
                        icon={<EditIcon />}
                        onClick={() => {
                          setDepId(dep.id);
                          Object.entries(dep).forEach(([key, val]) =>
                            setValue<any>(key, val)
                          );
                          setEdValue(dep.about || '');
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
                            `you're about to delete ${dep.shortName} department, deleting a department is irreversible`
                          );
                          if (confirm) deleteDepartment.mutate({ id: dep.id });
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
  const departments = await prisma.department.findMany();

  // console.log(departments);

  return {
    props: {
      departments,
    },
  };
};

export default Faculty;
