import { ArrowDropDown } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { tUser } from '../../types/user';
import { onImageError } from '../../utils/onImageError';
import { UserIcon, UserInfo, Username } from './styles';

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
      <Username>{user.name}</Username>
      <IconButton onClick={handleMenu}>
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
