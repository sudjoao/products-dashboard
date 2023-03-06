import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { UserContext } from '../../contexts/UserContext';
import { onImageError } from '../../utils/onImageError';
import { UserIcon, UserInfo } from './styles';
import { ArrowDropDown } from '@mui/icons-material';
import { UserInfoMenu } from '../UserInfoMenu';

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
    <Box sx={{ flexGrow: 1 }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {otherActions && otherActions}
          <>{user && <UserInfoMenu user={user} />}</>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
