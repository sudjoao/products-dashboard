import { useContext } from 'react';
import { CepContext } from '../../contexts/CepServiceContext';
import { SignInForm } from '../../forms/LoginForm';
import { AutenticationPage } from '../templates/AutenticationPage';
import SignInSVG from '../../assets/images/login.svg';
import { SignInImage } from './styles';

export const SignIn = () => {
  const { getLocationInfo } = useContext(CepContext);
  return (
    <AutenticationPage title="Acessar Conta">
      <SignInImage src={SignInSVG} />
      <SignInForm />
      <a href="/signup"> Criar Conta </a>
    </AutenticationPage>
  );
};
