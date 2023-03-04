import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { AutenticationRoutes } from './AutenticationRoutes';
import { MainRoutes } from './MainRoutes';

export const Routes = () => {
    const { userToken } = useContext(UserContext);
    return userToken ? <MainRoutes /> : <AutenticationRoutes />;
}
