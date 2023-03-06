import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  right: 0
});

export const Expanded = styled('div')({
  flexGrow: 1
});

export const Username = styled('p')`
  display: none;
  ${(props) => props.theme.breakpoints.up('sm')} {
    display: block;
  }
`;

export const UserIcon = styled('img')({
  width: '1.7rem',
  height: '1.7rem',
  borderRadius: '1rem',
  margin: '0 0.5rem'
});
