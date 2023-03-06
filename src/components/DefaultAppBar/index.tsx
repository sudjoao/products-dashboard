import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../../contexts/UserContext';
import { UserInfoMenu } from '../UserInfoMenu';
import { Typography } from '@mui/material';
import { Expanded } from '../UserInfoMenu/styles';

interface iDefaultAppBarProps {
  title: string;
  otherActions?: JSX.Element | JSX.Element[] | undefined;
}

export default function DefaultAppBar({
  title,
  otherActions
}: iDefaultAppBarProps) {
  const { user } = React.useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Expanded />
        {otherActions && otherActions}
        {user && <UserInfoMenu user={user} />}
      </Toolbar>
    </AppBar>
  );
}
