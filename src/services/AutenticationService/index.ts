import { HttpsAdapterType } from '../../adapters/https/HttpsAdapter';
import { tUserDto } from '../../types/dto/userDto';
import { tUser } from '../../types/user';
import { parseUserDto } from '../../utils/parseUserDto';

export interface iAutenticationService {
  signUp: (user: tUser) => Promise<tUser | undefined>;
  signIn: (email: string) => Promise<tUser | undefined>;
}

export class MockApiAutenticationService implements iAutenticationService {
  api: HttpsAdapterType;

  constructor(api: HttpsAdapterType) {
    this.api = api;
  }

  async signUp(user: tUser): Promise<tUser | undefined> {
    return {} as tUser;
  }

  async signIn(email: string): Promise<tUser | undefined> {
    const userInfo = await this.api.get<tUserDto[]>(`user?search=${email}`);
    console.log(userInfo);
    if (!userInfo || userInfo.length == 0) return;
    return parseUserDto(userInfo[0]);
  }
}
