import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { StyledDrawerDesktop, StyledDrawerMobile } from './styles';
import { DefaultAppBar } from '../DefaultAppBar';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';

interface iDefaultDrawerProps {
  otherActions: JSX.Element | JSX.Element[] | undefined;
}

export const DefaultDrawer = ({ otherActions }: iDefaultDrawerProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = [
    { name: 'Produtos', route: '/', icon: 'list' },
    { name: 'Novo Produto', route: '/product/new', icon: 'add' }
  ];
  const renderdrawerItems = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {drawerItems.map((item) => (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(item.route)}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
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
        {renderdrawerItems}
      </StyledDrawerDesktop>
      <StyledDrawerMobile
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {renderdrawerItems}
      </StyledDrawerMobile>
    </>
  );
};
