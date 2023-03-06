import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NotFoundContainer, NotFoundImage } from './styles';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <h3>A página que vocé estã tentando acessar não foi encontrada.</h3>
      <NotFoundImage src={require('../../assets/images/not_found.jpg')} />
      <Button onClick={() => navigate('/')}>Voltar ao Inicio</Button>
    </NotFoundContainer>
  );
};
