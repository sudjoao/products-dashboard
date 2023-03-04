import { createContext, useEffect, useState } from 'react';
import { iCepService } from '../../services/CepService';
import { tAddress } from '../../types/address';
import { tUser } from '../../types/user';

interface iCepContextProps {
    getLocationInfo(cep: string): Promise<tAddress | undefined>;
}

export const CepContext = createContext<iCepContextProps>(
    {} as iCepContextProps
);

interface iCepContextProvider {
    children: JSX.Element;
    cepService: iCepService;
}

export const CepContextProvider = ({ children, cepService }: iCepContextProvider) => {
    const getLocationInfo = async (cep: string) => {
        const addressInfo = await cepService.getLocationInfo(cep);
        return addressInfo;
    }

    return (
        <CepContext.Provider
            value={{ getLocationInfo }}
        >
            {children}
        </CepContext.Provider>
    );
};
