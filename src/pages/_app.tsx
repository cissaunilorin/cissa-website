import { ChakraProvider } from '@chakra-ui/react';
// import type { AppType } from 'next/app';
import { AppContextProvider } from '../context/appContext';
import { SessionProvider } from 'next-auth/react';
import Layout from '../layouts/layout';
import { theme } from '../styles/theme';
import { trpc } from '../utils/trpc';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'easymde/dist/easymde.min.css';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
