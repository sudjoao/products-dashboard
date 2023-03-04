import { createContext, useEffect, useState } from 'react';
import { iAutenticationService } from '../../services/AutenticationService';
import { tUser } from '../../types/user';
interface iUserContextProps {
  userToken: string | undefined;
  setUserToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  signUp: (user: tUser) => void;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => void;
}

export const UserContext = createContext<iUserContextProps>(
  {} as iUserContextProps
);

interface iUserContextProvider {
  children: JSX.Element;
  autenticationService: iAutenticationService;
}
export const UserContextProvider = ({
  children,
  autenticationService
}: iUserContextProvider) => {
  const [userToken, setUserToken] = useState<string | undefined>();

  useEffect(() => {
    const savedToken = localStorage.getItem('userToken');
    if (savedToken) setUserToken(savedToken);
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log(email, password);
    const user = await autenticationService.signIn(email);
    if (user && password == user.password) setUserToken(user.token);
    else throw Error('Email ou Senha incorretos');
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
