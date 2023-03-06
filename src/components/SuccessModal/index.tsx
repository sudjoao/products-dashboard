import { Modal } from '@mui/material';
import { Box } from '@mui/system';

interface iSuccessModalProps {
  open: boolean;
  handleClose: () => void;
  message: string;
}
export const SuccessModal = ({
  open,
  handleClose,
  message
}: iSuccessModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <p>{message}</p>
      </Box>
    </Modal>
  );
};
