import { tAddress } from './address';

export type tUser = {
  name: string;
  cpf: string;
  birthDate: Date;
  email: string;
  address: tAddress;
};
