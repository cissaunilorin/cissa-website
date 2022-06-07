import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import { Auth, getAuth } from 'firebase/auth';
import { createContext, FC, useEffect, useState, ReactNode } from 'react';
import { firebaseConfig } from '../utils/firebase';

interface APP {
  db?: Firestore;
  storage?: FirebaseStorage;
  auth?: Auth;
}

const AppContext = createContext<APP>({});

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [app] = useState<FirebaseApp>(initializeApp(firebaseConfig));

  const [db] = useState<Firestore>(getFirestore(app));
  const [storage] = useState<FirebaseStorage>(getStorage(app));
  const [auth] = useState<Auth>(getAuth(app));

  const context: APP = {
    db,
    storage,
    auth,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
