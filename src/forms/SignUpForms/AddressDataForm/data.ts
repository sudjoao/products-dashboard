import {
  AssistantDirection,
  Explore,
  Home,
  Map,
  MyLocation,
  Navigation
} from '@mui/icons-material';
import { tFormData } from '../../../types/formData';

interface iSignUpFormData {
  cep: tFormData;
  city: tFormData;
  state: tFormData;
  public_place: tFormData;
  neighborhood: tFormData;
  complement: tFormData;
}

export const formData: iSignUpFormData = {
  cep: {
    id: 'cep',
    name: 'cep',
    label: 'CEP',
    type: 'text',
    Icon: MyLocation
  },
  city: {
    id: 'city',
    name: 'city',
    label: 'Cidade',
    type: 'text',
    Icon: Home
  },
  state: {
    id: 'state',
    name: 'state',
    label: 'Estado',
    type: 'text',
    Icon: Map
  },
  public_place: {
    id: 'public_place',
    name: 'public_place',
    label: 'Logradouro',
    type: 'text',
    Icon: Navigation
  },
  neighborhood: {
    id: 'neighborhood',
    name: 'neighborhood',
    label: 'Bairro',
    type: 'text',
    Icon: Explore
  },
  complement: {
    id: 'complement',
    name: 'complement',
    label: 'Complemento',
    type: 'text',
    Icon: AssistantDirection
  }
};
