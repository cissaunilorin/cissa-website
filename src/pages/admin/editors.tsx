import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AppModal from '../../components/AppModal/AppModal';
import { prisma } from '../../server/lib/prisma';
import { trpc } from '../../utils/trpc';
import { IEditorForm, editorSchema } from '../../forms/editor.form';
import { Role } from '../../types/types';

const Editor: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ editors }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNew, setIsNew] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<IEditorForm>({
    resolver: zodResolver(editorSchema),
    mode: 'onChange',
  });

  const router = useRouter();
  const toast = useToast();

  const createEditor = trpc.exco.createEditor.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.reload();
    },
  });

  const activateEditor = trpc.exco.activateEditor.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      toast({
        position: 'top-right',
        status: 'success',
        description: `Editor has been ${res ? '' : 'de'}activated`,
        isClosable: true,
        duration: 5000,
      });

      setTimeout(() => {
        router.reload();
      }, 5000);
    },
    onError() {
      setIsLoading(false);
    },
  });

  const onSubmit = () => {
    setIsLoading(true);
    const data = getValues();
    createEditor.mutate(data);
  };

  return (
    <>
      <Head>
        <title>Editors - CISSA</title>
      </Head>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        heading='Add New Editor'
        isSubmitting={isLoading}
        onClick={onSubmit}
        w='800px'>
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
      </AppModal>

      <Box py='50px'>
        <Box width={'1200px'} maxW={'100%'} m='0 auto'>
          <TableContainer>
            <Table variant='striped' colorScheme='brown'>
              <TableCaption>Editors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>
                    <IconButton
                      aria-label='add new'
                      variant='outline'
                      icon={<AddIcon />}
                      onClick={() => {
                        setIsNew(true);
                        onOpen();
                      }}
                    />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {editors.map((editor) => (
                  <Tr key={editor.id}>
                    <Td>{editor.name}</Td>
                    <Td>{editor.email}</Td>
                    <Td>
                      <IconButton
                        aria-label='delete'
                        variant='outline'
                        isLoading={isLoading}
                        icon={editor.isActive ? <DeleteIcon /> : <CheckIcon />}
                        onClick={() => {
                          const confirm = window.confirm(
                            `you're about to ${
                              editor.isActive ? 'de' : ''
                            }activate ${editor.name}`
                          );
                          setIsLoading(true);
                          if (confirm)
                            activateEditor.mutate({
                              id: editor.id,
                              isActive: !editor.isActive,
                            });
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
  const editors = await prisma.user.findMany({
    where: {
      role: Role.EDITOR,
    },
  });

  return {
    props: {
      editors,
    },
  };
};

export default Editor;
