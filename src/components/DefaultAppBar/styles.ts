import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});

export const UserIcon = styled('img')({
  width: '2rem',
  height: '2rem',
  borderRadius: '1rem',
  margin: '0 0.5rem'
});
