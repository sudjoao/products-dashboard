import { Lock, Mail } from '@mui/icons-material';
import { tFormData } from '../../types/formData';

interface iLoginFormData {
  email: tFormData;
  password: tFormData;
}

export const formData: iLoginFormData = {
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
  }
};
