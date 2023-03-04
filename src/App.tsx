import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { AutenticationRoutes } from './routes/AutenticationRoutes';
import { MainRoutes } from './routes/MainRoutes';

export const App = () => {
  const { userToken } = useContext(UserContext);
  return userToken ? <MainRoutes /> : <AutenticationRoutes />;
};
