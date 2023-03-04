import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { HttpsAdapter } from './adapters/https/HttpsAdapter';
import { VIA_CEP_API } from './constants/services';
import { theme } from './constants/theme';
import { UserContextProvider } from './contexts/UserContext';
import { Routes } from './routes';
import { ViaCepService } from './services/CepService';

export const App = () => {
  const viaCepApi = new HttpsAdapter(VIA_CEP_API);
  const cepService = new ViaCepService(viaCepApi);
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
};
