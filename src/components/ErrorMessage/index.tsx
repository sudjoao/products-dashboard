import React from 'react';
import { ErrorMessageText } from './styles';

interface iErrorMessageProps {
  message: string | undefined;
}

export const ErrorMessage = ({ message }: iErrorMessageProps) => {
  return <ErrorMessageText>{message}</ErrorMessageText>;
};
