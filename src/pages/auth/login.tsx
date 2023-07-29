import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Center,
  chakra,
  useToast,
} from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm, loginSchema } from '../../forms/login.form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const router = useRouter();
  const toast = useToast();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    signIn('credentials', {
      redirect: false,
      email: data.email.toLowerCase(),
      password: data.password,
    })
      .then((res) => {
        if (res?.error) throw new Error(res.error);

        router.replace('/admin');
      })
      .catch((err) => {
        toast({
          position: 'top-right',
          title: 'Error',
          description: err.message,
          isClosable: true,
          duration: 5000,
          status: 'error',
        });
      });
  };

  return (
    <>
      <Head>
        <title>Login - CISSA</title>
      </Head>

      <Box w={'100%'}>
        <Box>
          <Center mb={'30px'}>
            <Image
              src={'/images/icons/cissa144.png'}
              width={100}
              height={100}
              alt='logo'
            />
          </Center>

          <chakra.form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isRequired
              isInvalid={!!errors.email?.message}
              mb={'25px'}>
              <FormLabel htmlFor='name'>email</FormLabel>
              <Input
                id='email'
                type={'email'}
                placeholder='email'
                {...register('email')}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

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

            <Button mt={4} isLoading={isSubmitting} type='submit'>
              Submit
            </Button>
          </chakra.form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
