import { createContext, useEffect, useState } from 'react';
import { iAutenticationService } from '../../services/AutenticationService';
import { tUser } from '../../types/user';
interface iUserContextProps {
  userToken: string | undefined;
  setUserToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: tUser | undefined;
  signUp: (user: tUser) => Promise<tUser | undefined>;
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
  const [user, setUser] = useState<tUser>();

  useEffect(() => {
    const savedToken = localStorage.getItem('userToken');
    if (savedToken) {
      autenticationService.getUserInfo(savedToken).then(setUser).catch(alert);
      setUserToken(savedToken);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const userInfo = await autenticationService.signIn(email);
    if (userInfo && password == userInfo.password) {
      await localStorage.setItem('userToken', userInfo.token);
      setUserToken(userInfo.token);
    } else throw Error('Email ou Senha incorretos');
  };

  const signUp = async (user: tUser) => {
    const userInfo = await autenticationService.signUp(user);
    if (!userInfo) return;
    await localStorage.setItem('userToken', userInfo.token);
    return userInfo;
  };

  const logOut = async () => {
    await localStorage.removeItem('userToken');
    setUserToken(undefined);
  };

  return (
    <UserContext.Provider
      value={{ userToken, setUserToken, user, signIn, signUp, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
