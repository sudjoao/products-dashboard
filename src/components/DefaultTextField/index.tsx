import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { tFormData } from '../../types/formData';
import { StyledTextField } from './styles';

interface iDefaultTextFieldProps {
  formData: tFormData;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  error: boolean | undefined;
  helperText?: string | false | undefined;
  hiddenText?: boolean;
}

export const DefaultTextField = ({
  formData,
  value,
  onChange,
  error,
  helperText,
  hiddenText = false
}: iDefaultTextFieldProps) => {
  const [showText, setShowText] = useState(false);
  return (
    <StyledTextField
      {...formData}
      value={value}
      type={hiddenText && showText ? 'text' : formData.type}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <formData.Icon color="info" />
          </InputAdornment>
        ),
        endAdornment: hiddenText && (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowText(!showText)}>
              {showText ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};
