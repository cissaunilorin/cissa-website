import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Center,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Form, Formik, Field } from 'formik';
import Head from 'next/head';
import Image from 'next/image';

const Login: FC = () => {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <>
      <Head>
        <title>cissa - login</title>
      </Head>

      <Box w={'100%'}>
        <Box>
          <Center mb={'30px'}>
            <Image
              src={'/images/icons/cissa144.png'}
              width={100}
              height={100}
              alt="logo"
            />
          </Center>

          <Formik
            initialValues={{ name: 'Sasuke' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {props => (
              <Form>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">First name</FormLabel>
                      <Input {...field} id="name" placeholder="name" />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  // h="70px"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default Login;
