import { ThemeProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { BrowserRouter } from 'react-router-dom';
import { HttpsAdapter } from './adapters/https/HttpsAdapter';
import { MOCK_API, VIA_CEP_API } from './constants/services';
import { theme } from './constants/theme';
import { CepContextProvider } from './contexts/CepServiceContext';
import { UserContextProvider } from './contexts/UserContext';
import { Routes } from './routes';
import { MockApiAutenticationService } from './services/AutenticationService';
import { ViaCepService } from './services/CepService';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LoadingContextProvider } from './contexts/LoadingContext';

export const App = () => {
  const viaCepApi = new HttpsAdapter(VIA_CEP_API);
  const cepService = new ViaCepService(viaCepApi);
  const mockApi = new HttpsAdapter(MOCK_API);
  const autenticationService = new MockApiAutenticationService(mockApi);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <LoadingContextProvider>
          <CepContextProvider cepService={cepService}>
            <UserContextProvider autenticationService={autenticationService}>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </UserContextProvider>
          </CepContextProvider>
        </LoadingContextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
