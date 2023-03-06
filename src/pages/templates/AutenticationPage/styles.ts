import { styled } from '@mui/system';

export const AutenticationPageContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#F6F6F6',
  padding: '1.5rem 1rem',
  margin: 'auto'
});

export const AutenticationPageTitle = styled('h1')`
  color: ${(props) => props.theme.palette.primary};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const AutenticationPageContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
});
