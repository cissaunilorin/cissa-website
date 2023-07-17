import { NextPage } from 'next';
import {
  FormBox,
  contactWrapper,
  contactComponentsContainer,
  contactSummary,
  contactSummaryHeading,
} from '../styles/pages/contact';
import { mainBoxStyle } from '../styles/common';
import {
  Text,
  Box,
  Heading,
  Input,
  Flex,
  Button,
  Textarea,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { IContactForm, contactSchema } from '../forms/contact.form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '../utils/trpc';
import { useState } from 'react';

const Contact: NextPage = () => {
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const sendMessage = trpc.contact.sendMessage.useMutation({
    onSuccess(res) {
      setLoading(false);
      toast({
        position: 'top-right',
        status: 'success',
        description: 'success',
        isClosable: true,
        duration: 5000,
      });
    },
    onError(res) {
      setLoading(false);
      toast({
        position: 'top-right',
        status: 'error',
        description: 'try again later',
        isClosable: true,
        duration: 5000,
      });
    },
  });

  const submit = (data: IContactForm) => {
    setLoading(true);
    sendMessage.mutate(data);
  };

  return (
    <>
      <Head>
        <title>Contact us - CISS</title>
      </Head>

      <Box {...mainBoxStyle} {...contactWrapper}>
        <Box textAlign={'center'}>
          <Heading {...contactSummaryHeading}>Contact us</Heading>
          <Text {...contactSummary}>
            We look forward to hearing from you and exploring potential
            collaborations that can contribute to the exciting world of computer
            science and information technology.
          </Text>
        </Box>
        <Box as='form' onSubmit={handleSubmit(submit)} {...FormBox}>
          <FormControl
            isRequired
            isInvalid={!!errors.name?.message}
            mb={'25px'}>
            <FormLabel color={'#84736C'} htmlFor='name'>
              Name
            </FormLabel>
            <Input type='text' id='name' {...register('name')} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={!!errors.email?.message}
            mb={'25px'}>
            <FormLabel color={'#84736C'} htmlFor='email'>
              Email
            </FormLabel>
            <Input type='email' id='email' {...register('email')} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={!!errors.subject?.message}
            mb={'25px'}>
            <FormLabel color={'#84736C'} htmlFor='subject'>
              Subject
            </FormLabel>
            <Input type='text' id='subject' {...register('subject')} />
            <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={!!errors.message?.message}
            mb={'20px'}>
            <FormLabel color={'#84736C'} htmlFor='message'>
              Message
            </FormLabel>
            <Textarea id='message' rows={4} {...register('message')} />
            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
          </FormControl>

          <Button variant='dark' type='submit' isLoading={isLoading}>
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
