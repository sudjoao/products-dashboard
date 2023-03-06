import { HttpsAdapterType } from '../../adapters/https/HttpsAdapter';
import { tAddress } from '../../types/address';
import { tAddresDto } from '../../types/dto/addressDto';
import { parseAddressDto } from '../../utils/parseAddressDto';

export interface iCepService {
  getLocationInfo(cep: string): Promise<tAddress | undefined>;
}

export class ViaCepService implements iCepService {
  api: HttpsAdapterType;

  constructor(api: HttpsAdapterType) {
    this.api = api;
  }

  async getLocationInfo(cep: string): Promise<tAddress | undefined> {
    const addressInfo = await this.api.get<tAddresDto>(`ws/${cep}/json`);
    return parseAddressDto(addressInfo);
  }
}
