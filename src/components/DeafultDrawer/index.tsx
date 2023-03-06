import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { StyledDrawerDesktop, StyledDrawerMobile } from './styles';
import { ListAlt } from '@mui/icons-material';
import { DefaultAppBar } from '../DefaultAppBar';
import { useNavigate } from 'react-router-dom';

interface iDefaultDrawerProps {
  otherActions: JSX.Element | JSX.Element[] | undefined;
}

export const DefaultDrawer = ({ otherActions }: iDefaultDrawerProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = (
    <>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary={'Produtos'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
  return (
    <>
      <DefaultAppBar
        otherActions={otherActions}
        handleDrawerToggle={handleDrawerToggle}
      />
      <StyledDrawerDesktop variant="permanent" open>
        {drawerItems}
      </StyledDrawerDesktop>
      <StyledDrawerMobile
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerItems}
      </StyledDrawerMobile>
    </>
  );
};
