import { ConfirmButton, ModalContainer, StyledModal } from './styles';

interface iDefaultModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: JSX.Element[] | JSX.Element;
  onClick: () => void;
}
export const DefaultModal = ({
  open,
  handleClose,
  title,
  children,
  onClick
}: iDefaultModalProps) => {
  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContainer>
        <h3>{title}</h3>
        {children}
        <ConfirmButton onClick={onClick}>Confirmar</ConfirmButton>
      </ModalContainer>
    </StyledModal>
  );
};
