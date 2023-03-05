import React from 'react';
import { FormContainer } from './styles';

interface iFormTemplateProps {
  children: JSX.Element | JSX.Element[];
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const FormTemplate = ({ children, onSubmit }: iFormTemplateProps) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
