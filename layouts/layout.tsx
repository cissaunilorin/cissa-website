import { Box } from '@chakra-ui/layout';
import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
