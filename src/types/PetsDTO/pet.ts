import { Pets } from './petEnums';

export interface Pet {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  notificationCount: number,
  petType: Pets
}
