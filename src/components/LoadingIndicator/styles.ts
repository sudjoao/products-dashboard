import { Box, CircularProgress, styled } from '@mui/material';

export const LoadingIndicatorContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 80vw;
    margin-left: 20vw;
  }
`;
export const StyledLoadingIndicator = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main
}));
