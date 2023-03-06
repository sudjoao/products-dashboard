import { Box, styled } from '@mui/material';

export const ProductContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.breakpoints.up('sm')} {
    background-color: #fff;
    border-radius: 1rem;
    width: 40vw;
    max-width: 25rem;
    padding: 1rem 2rem;
    margin: auto;
  }
`;

export const ProductImage = styled('img')({
  height: '20vh',
  borderRadius: '2rem',
  margin: '1rem 0'
});

export const ProductName = styled('h2')({
  fontSize: '1.5rem',
  fontWeight: 'bold'
});

export const ProductBrand = styled('p')({
  fontSize: '0.9rem',
  margin: '0.75rem'
});

export const ProductValue = styled('h3')({
  fontSize: '1.2rem',
  fontWeight: '600'
});

export const ProductValueDescription = styled('p')({
  fontSize: '1rem'
});

export const ProductInfoContainer = styled(Box)`
  display: flex;
  alignitems: center;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 100%;
  }
`;

export const ProductInfoBox = styled(Box)({
  padding: '1rem',
  textAlign: 'center'
});
