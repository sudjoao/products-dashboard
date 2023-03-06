import { createContext, useState } from 'react';
import { LoadingIndicator } from '../../components/LoadingIndicator';
interface iLoadingContextProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean, showFullScreen?: boolean) => void;
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
  const [fullscreen, setFullscreen] = useState(false);

  const handleSetIsLoading = (loading: boolean, showFullScreen = false) => {
    setIsLoading(loading);
    setFullscreen(showFullScreen);
  };
  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading: handleSetIsLoading }}
    >
      {isLoading && <LoadingIndicator fullscreen={fullscreen} />}
      {children}
    </LoadingContext.Provider>
  );
};
