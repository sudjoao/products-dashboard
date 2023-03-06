import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../../contexts/UserContext';
import { UserInfoMenu } from '../UserInfoMenu';
import { Expanded } from '../UserInfoMenu/styles';
import { DrawerButton } from './styles';

interface iDefaultAppBarProps {
  otherActions?: JSX.Element | JSX.Element[] | undefined;
  handleDrawerToggle: () => void;
}

export const DefaultAppBar = ({
  otherActions,
  handleDrawerToggle
}: iDefaultAppBarProps) => {
  const { user } = React.useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <DrawerButton edge="start" onClick={handleDrawerToggle}>
          <MenuIcon />
        </DrawerButton>

        <Expanded />
        {otherActions && otherActions}
        {user && <UserInfoMenu />}
      </Toolbar>
    </AppBar>
  );
};
