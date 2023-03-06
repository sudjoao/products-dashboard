import { tAddress } from './address';

export type tUser = {
  name: string;
  surname: string;
  cpf: string;
  birthDate: Date;
  email: string;
  password: string;
  image?: string;
  token: string;
  address: tAddress | undefined;
};

export type tPartialUser = {
  name?: string;
  surname?: string;
  cpf?: string;
  birthDate?: Date;
  email?: string;
  password?: string;
  token?: string;
  address?: tAddress | undefined;
};
