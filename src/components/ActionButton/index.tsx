import React from 'react';
import { StyledIcon, StyledIconButton } from './styles';

interface iActionButtonProps {
  icon: string;
  onClick: (() => void) | ((event: React.MouseEvent<HTMLElement>) => void);
}
export const ActionButton = ({ icon, onClick }: iActionButtonProps) => {
  return (
    <StyledIconButton onClick={onClick}>
      <StyledIcon>{icon}</StyledIcon>
    </StyledIconButton>
  );
};
