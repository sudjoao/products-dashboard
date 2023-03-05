import { SignInForm } from '../../forms/SignInForm';
import { AutenticationPage } from '../templates/AutenticationPage';
import SignInSVG from '../../assets/images/login.svg';
import { SignInImage } from './styles';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();
  return (
    <AutenticationPage title="Acessar Conta">
      <SignInImage src={SignInSVG} />
      <SignInForm />
      <Button variant="text" onClick={() => navigate('/signup')}>
        Criar Conta
      </Button>
    </AutenticationPage>
  );
};
