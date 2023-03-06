import { ArrowDropDown } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { tUser } from '../../types/user';
import { onImageError } from '../../utils/onImageError';
import { UserIcon, UserInfo } from './styles';

interface iUserInfoMenuProps {
  user: tUser;
}

export const UserInfoMenu = ({ user }: iUserInfoMenuProps) => {
  const { logOut } = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <UserInfo>
      <UserIcon src={user && user.image} onError={onImageError} />
      <p>{user.name}</p>
      <IconButton
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <ArrowDropDown />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logOut}>Sair</MenuItem>
      </Menu>
    </UserInfo>
  );
};
