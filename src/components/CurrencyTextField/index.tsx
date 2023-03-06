import React, { useState } from 'react';
import { DefaultTextField } from '../DefaultTextField';
import { tFormData } from '../../types/formData';
import { tSelectItem } from '../../types/selectItem';
import { NumberFormatBase, NumericFormat } from 'react-number-format';
import { FormikErrors } from 'formik';

interface iCurrencyTextFieldProps {
  formData: tFormData;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  error: boolean | undefined;
  helperText?: string | false | undefined;
  hiddenText?: boolean;
  selectable?: boolean;
  selectItems?: tSelectItem[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          image: string;
          name: string;
          brand: string;
          price: string;
          stock: string;
        }>
      >;
}

export const CurrencyTextField = ({
  value,
  onChange,
  setFieldValue,
  ...props
}: iCurrencyTextFieldProps) => {
  return (
    <NumericFormat
      customInput={DefaultTextField}
      prefix={'R$'}
      value={value}
      onValueChange={(vals) => setFieldValue('price', vals.formattedValue)}
      decimalScale={2}
      thousandSeparator={','}
      decimalSeparator={'.'}
      {...props}
    />
  );
};
