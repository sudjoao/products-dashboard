import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, MenuItem } from '@mui/material';
import { useState } from 'react';
import { tFormData } from '../../types/formData';
import { tSelectItem } from '../../types/selectItem';
import { StyledTextField } from './styles';

interface iDefaultTextFieldProps {
  formData: tFormData;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  error: boolean | undefined;
  helperText?: string | false | undefined;
  hiddenText?: boolean;
  selectable?: boolean;
  selectItems?: tSelectItem[];
}

export const DefaultTextField = ({
  formData,
  value,
  onChange,
  error,
  helperText,
  selectItems,
  hiddenText = false,
  selectable = false
}: iDefaultTextFieldProps) => {
  const [showText, setShowText] = useState(false);
  return (
    <StyledTextField
      {...formData}
      value={value}
      type={hiddenText && showText ? 'text' : formData.type}
      onChange={onChange}
      variant={'filled'}
      error={error}
      helperText={helperText}
      select={selectable}
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
    >
      {selectable &&
        selectItems?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </StyledTextField>
  );
};
