import { FC } from 'react';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { getServerAuthSession } from '../../../server/common/get-server-auth-session';
import { trpc } from '../../../utils/trpc';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IEdForm, edSchema } from '../../../forms/editor.form';
import { EditIcon } from '@chakra-ui/icons';

const AuthorDetails: FC<{ user: Session['user'] }> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<IEdForm>({
    resolver: zodResolver(edSchema),
    mode: 'onChange',
    defaultValues: {
      email: user.email,
      name: user.name,
    },
  });
  const router = useRouter();

  const createBlog = trpc.blog.createBlogPost.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      router.push(`/write/${res.id}`);
    },
    onError() {
      setIsLoading(false);
    },
  });

  const newBlog = () => {
    setIsLoading(true);
    createBlog.mutate();
  };

  return (
    <Box flex={1} mt='100px' mb='100px' pl='20px'>
      <Avatar name={user.name} size={'2xl'} mb='30px' />
      <Button
        leftIcon={<EditIcon />}
        onClick={newBlog}
        mb='30px'
        display={'block'}
        isLoading={isLoading}>
        write
      </Button>
      <Box>
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
        <FormControl isRequired isInvalid={!!errors.email?.message}>
          <FormLabel htmlFor='Email'>Email</FormLabel>
          <Input
            id='Email'
            type={'email'}
            disabled
            placeholder='Email'
            {...register('email')}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <Divider my={'25px'} />

        <FormControl
          isRequired
          isInvalid={!!errors.password?.message}
          mb={'25px'}>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            id='password'
            type={'password'}
            placeholder='password'
            {...register('password')}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button>update profile</Button>
      </Box>
    </Box>
  );
};

export default AuthorDetails;
