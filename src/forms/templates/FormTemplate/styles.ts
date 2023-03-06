import { styled } from '@mui/material';

export const FormContainer = styled('form')`
  display: grid;
  gridTemplateColumns: 1fr
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 40%;
    gap: 2rem;
    margin: auto;
  }
`;
