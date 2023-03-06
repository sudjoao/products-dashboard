import { HttpsAdapterType } from '../../adapters/https/HttpsAdapter';
import { tUserDto } from '../../types/dto/userDto';
import { tUser } from '../../types/user';
import { parseUserDto } from '../../utils/parseUserDto';

export interface iAutenticationService {
  signUp: (user: tUser) => Promise<tUser | undefined>;
  signIn: (email: string) => Promise<tUser | undefined>;
  getUserInfo: (token: string) => Promise<tUser | undefined>;
}

export class MockApiAutenticationService implements iAutenticationService {
  api: HttpsAdapterType;

  constructor(api: HttpsAdapterType) {
    this.api = api;
  }

  async signUp(user: tUser): Promise<tUser | undefined> {
    const userInfo = await this.api.post<tUserDto>('user', user);
    return parseUserDto(userInfo);
  }

  async signIn(email: string): Promise<tUser | undefined> {
    const userInfo = await this.api.get<tUserDto[]>(`user?search=${email}`);
    if (!userInfo || userInfo.length == 0) return;
    return parseUserDto(userInfo[0]);
  }

  async getUserInfo(token: string): Promise<tUser | undefined> {
    const userInfo = await this.api.get<tUserDto[]>(`user?search=${token}`);
    if (!userInfo || userInfo.length == 0) return;
    return parseUserDto(userInfo[0]);
  }
}
