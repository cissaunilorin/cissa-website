import { createContext, FC, ReactNode } from 'react';

const AppContext = createContext({});

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context = {};

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
