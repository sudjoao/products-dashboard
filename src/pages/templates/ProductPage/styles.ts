import { Box, styled } from '@mui/system';

export const ProductPageContainer = styled(Box)({
  maxWidth: '100vw',
  height: '100vh',
  backgroundColor: '#F6F6F6'
});

export const ProductPageContent = styled(Box)({
  padding: '1.5rem 1rem'
});

export const ProductPageTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.primary,
  fontSize: '1.5rem',
  marginBottom: '1.5rem'
}));
