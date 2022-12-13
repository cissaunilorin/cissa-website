import { createContext, FC, ReactNode } from 'react';

interface APP {}

const AppContext = createContext<APP>({});

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context: APP = {};

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
