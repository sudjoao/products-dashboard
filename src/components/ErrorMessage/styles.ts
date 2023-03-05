import { styled } from '@mui/material';

export const ErrorMessageText = styled('p')(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.error.main,
  marginLeft: '0.5rem'
}));
