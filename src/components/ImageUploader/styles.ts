import { Input, styled } from '@mui/material';
import { Box } from '@mui/system';

export const ImageUploaderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const StyledFileInput = styled(Input)({
  maxWidth: '60vw'
});

export const ImagePreview = styled('img')({
  width: '20vh',
  height: '20vh',
  borderRadius: '5vh'
});
