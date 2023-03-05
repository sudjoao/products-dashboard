import { Lock, Mail } from '@mui/icons-material';
import { tFormData } from '../../../types/formData';

interface iSignUpFormData {
  email: tFormData;
  password: tFormData;
  confirmPassword: tFormData;
}

export const formData: iSignUpFormData = {
  email: {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'emai',
    Icon: Mail
  },
  password: {
    id: 'password',
    name: 'password',
    label: 'Senha',
    type: 'password',
    Icon: Lock
  },
  confirmPassword: {
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'Confirmar Senha',
    type: 'password',
    Icon: Lock
  }
};
