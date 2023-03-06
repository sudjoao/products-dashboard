import { Box, CircularProgress, styled } from '@mui/material';

interface iLoadingIndicatorContainerProps {
  fullscreen?: boolean;
}
export const LoadingIndicatorContainer = styled(
  Box
)<iLoadingIndicatorContainerProps>`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: ${({ fullscreen }) => (fullscreen ? '100vw' : '80vw')};
    margin-left: ${({ fullscreen }) => (fullscreen ? '0' : '20vw')};
  }
`;
export const StyledLoadingIndicator = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main
}));
