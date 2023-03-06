import { Drawer, styled } from '@mui/material';

export const StyledDrawerDesktop = styled(Drawer)`
  .MuiDrawer-paper {
    display: none;
    box-sizing: border-box;
    width: 20vw;
    ${(props) => props.theme.breakpoints.up('sm')} {
      display: block;
    }
  }
`;

export const StyledDrawerMobile = styled(Drawer)`
  .MuiDrawer-paper {
    box-sizing: border-box;
    width: 60vw;
    ${(props) => props.theme.breakpoints.up('sm')} {
      display: none;
    }
  }
`;
