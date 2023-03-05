import { DatePicker, DateValidationError } from '@mui/x-date-pickers';
import { PickerChangeHandler } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue';
import React from 'react';
import { ErrorMessage } from '../ErrorMessage';
import { CustomDatePickerComponenet, DatePickerContainer } from './styles';

interface iCustomDatePickerProps {
  onChange: PickerChangeHandler<unknown, DateValidationError> | undefined;
  hasError: boolean | undefined;
  errorMessage: string | undefined;
}

export const CustomDatePicker = ({
  onChange,
  hasError,
  errorMessage
}: iCustomDatePickerProps) => {
  return (
    <DatePickerContainer>
      <CustomDatePickerComponenet onChange={onChange} />
      {hasError && <ErrorMessage message={errorMessage} />}
    </DatePickerContainer>
  );
};
