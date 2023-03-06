import { tUserDto } from '../types/dto/userDto';
import { tUser } from '../types/user';
import { parseAddressDto } from './parseAddressDto';

export const parseUserDto = (
  userDto: tUserDto | undefined
): tUser | undefined => {
  if (!userDto) return;
  const {
    nome,
    sobrenome,
    cpf,
    dt_nascimento,
    email,
    senha,
    token,
    image,
    ...rest
  } = userDto;
  return {
    name: nome,
    surname: sobrenome,
    cpf: cpf.toString(),
    password: senha,
    image,
    token,
    birthDate: new Date(dt_nascimento),
    email,
    address: parseAddressDto(rest)
  };
};
