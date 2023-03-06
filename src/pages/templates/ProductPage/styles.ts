import { Box, styled } from '@mui/system';

export const ProductPageContainer = styled(Box)`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #f6f6f6;
  ${(props) => props.theme.breakpoints.up('sm')} {
    max-width: 80vw;
    margin-left: auto;
  }
`;

export const ProductPageContent = styled(Box)`
  padding: 1.5rem 1rem;

  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 1.5rem 2rem;
  }
`;

export const ProductPageTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.primary,
  fontSize: '1.2rem',
  marginBottom: '1.5rem'
}));
