import { styled } from '@mui/material';

export const FormContainer = styled('form')`
  display: grid;
  gridtemplatecolumns: 1fr;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 40%;
    margin: auto;
  }
`;
