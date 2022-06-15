import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import AdminHeader from '../components/Admin/Header/Header';
import SideBar from '../components/Admin/SideBar/SideBar';
import { adminBody, adminBox, authBody } from './styles';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  if (router.pathname.startsWith('/admin'))
    return (
      <Flex {...adminBox} alignItems="center" justifyContent="center">
        <Flex {...adminBody}>
          <SideBar />

          <Flex flex={1} direction="column" backgroundColor="white">
            <AdminHeader />
            <Box flex={1} as="main">
              {children}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );

  if (router.pathname.startsWith('/auth'))
    return (
      <Flex
        {...adminBox}
        overflowY="auto"
        pb={'50px'}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Flex {...authBody}>{children}</Flex>
      </Flex>
    );

  return (
    <>
      <Head>
        <title>cissa</title>
      </Head>

      <>{children}</>
    </>
  );
};

export default Layout;
