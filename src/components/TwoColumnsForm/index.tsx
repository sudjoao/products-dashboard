import React from 'react';
import { TwoColumnsFormContainer } from './styles';
interface iTwoColumsFormProps {
  children: JSX.Element[];
}
export const TwoColumsForm = ({ children }: iTwoColumsFormProps) => {
  return <TwoColumnsFormContainer>{children}</TwoColumnsFormContainer>;
};
