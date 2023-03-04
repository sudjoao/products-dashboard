import { tAddres } from './address';

export type tUser = {
  name: string;
  cpf: string;
  birthDate: Date;
  email: string;
  address: tAddres;
};
