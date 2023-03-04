import { tAddress } from '../types/address';
import { tAddresDto } from '../types/dto/addressDto';

export const parseAddressDto = (addressDto: tAddresDto | undefined): tAddress | undefined => {
  if(!addressDto) return;
  const { cep, logradouro, complemento, bairro, localidade, uf } = addressDto;
  return {
    cep,
    city: localidade,
    state: uf,
    public_place: logradouro,
    neighborhood: bairro,
    complement: complemento
  };
};
