import { createContext, useEffect, useState } from 'react';
import { tUser } from '../../types/user';
interface iUserContextProps {
  userToken: string | undefined;
  setUserToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  signUp: (user: tUser) => void;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
}

export const UserContext = createContext<iUserContextProps>(
  {} as iUserContextProps
);

interface iUserContextProvider {
  children: JSX.Element;
}
export const UserContextProvider = ({ children }: iUserContextProvider) => {
  const [userToken, setUserToken] = useState<string | undefined>();

  useEffect(() => {
    const savedToken = localStorage.getItem('userToken');
    if (savedToken) setUserToken(savedToken);
  }, []);

  const signIn = (email: string, password: string) => {
    console.log(email, password);
  };

  const signUp = (user: tUser) => {
    console.log(user);
  };

  const logOut = () => {
    console.log('logged out');
  };

  return (
    <UserContext.Provider
      value={{ userToken, setUserToken, signIn, signUp, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
