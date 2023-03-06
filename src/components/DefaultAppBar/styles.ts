import { IconButton, styled } from '@mui/material';
import { Box } from '@mui/system';

export const AppBarContainer = styled(Box)({
  flexGrow: 1
});

export const DrawerButton = styled(IconButton)`
  display: block;
  color: #fff;
  ${(props) => props.theme.breakpoints.up('sm')} {
    display: none;
  }
`;
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
