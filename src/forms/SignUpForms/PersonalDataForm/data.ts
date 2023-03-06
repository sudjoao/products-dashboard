import {
  Badge,
  CalendarMonth,
  Mail,
  PermIdentity,
  Person
} from '@mui/icons-material';
import { tFormData } from '../../../types/formData';
import { tSelectItem } from '../../../types/selectItem';

interface iPersonalFormData {
  name: tFormData;
  surname: tFormData;
  birthDate: tFormData;
  sex: tFormData;
  cpf: tFormData;
}

export const formData: iPersonalFormData = {
  name: {
    id: 'name',
    name: 'name',
    label: 'Nome',
    Icon: Person
  },
  surname: {
    id: 'surname',
    name: 'surname',
    label: 'Sobrenome',
    Icon: Badge
  },
  birthDate: {
    id: 'birthDate',
    name: 'birthDate',
    label: 'Data de Nascimento',
    type: 'date',
    Icon: CalendarMonth
  },
  cpf: {
    id: 'cpf',
    name: 'cpf',
    label: 'CPF',
    Icon: PermIdentity
  },
  sex: {
    id: 'sex',
    name: 'sex',
    label: 'Sexo',
    Icon: Mail
  }
};

export const sexData: tSelectItem[] = [
  {
    label: 'Masculino',
    value: 'M'
  },
  {
    label: 'Feminino',
    value: 'F'
  },
  {
    label: 'Outros',
    value: 'O'
  }
];
