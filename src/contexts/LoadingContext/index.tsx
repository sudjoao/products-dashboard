import { createContext, useEffect, useState } from 'react';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { iAutenticationService } from '../../services/AutenticationService';
import { tUser } from '../../types/user';
interface iLoadingContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<iLoadingContextProps>(
  {} as iLoadingContextProps
);

interface iLoadingContextProvider {
  children: JSX.Element;
}

export const LoadingContextProvider = ({
  children
}: iLoadingContextProvider) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingIndicator />}
      {children}
    </LoadingContext.Provider>
  );
};
