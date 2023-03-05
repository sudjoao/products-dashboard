import { Box, CircularProgress, styled } from "@mui/material";

export const LoadingIndicatorContainer = styled(Box)({
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5
})
export const StyledLoadingIndicator = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.primary.main,
}))