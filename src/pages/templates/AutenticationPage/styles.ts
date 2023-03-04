import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const AutenticationPageContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#F6F6F6',
  padding: '1.5rem 1rem',
  margin: 'auto'
});

export const AutenticationPageTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.primary,
  fontSize: '1.5rem',
  marginBottom: '1.5rem'
}));

export const AutenticationPageContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
});
