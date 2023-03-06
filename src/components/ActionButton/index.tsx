import { IconButton } from '@mui/material';
import React from 'react';
import { StyledIconButton } from './styles';

interface iActionButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}
export const ActionButton = ({ icon, onClick }: iActionButtonProps) => {
  return <StyledIconButton onClick={onClick}>{icon}</StyledIconButton>;
};
