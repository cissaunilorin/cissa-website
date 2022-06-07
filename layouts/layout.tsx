import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>cissa</title>
      </Head>

      <Box>{children}</Box>
    </>
  );
};

export default Layout;
