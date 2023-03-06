import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const NotFoundContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  gap: 1rem;
  margin: auto;
`;

export const NotFoundImage = styled('img')`
  height: 30vh;
`;
