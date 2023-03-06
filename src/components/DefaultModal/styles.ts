import { Button, Modal, styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled(Box)`
  width: 40vw;
  padding: 2rem 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ConfirmButton = styled(Button)`
  align-self: flex-end;
`;
