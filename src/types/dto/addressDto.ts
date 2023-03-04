export type tAddresDto = {
  cep: string;
  logradouro: string;
  complemento: string | number;
  bairro: string;
  localidade?: string;
  uf?: string;
};
