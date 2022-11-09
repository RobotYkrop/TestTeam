import { Pet } from '../PetsDTO/pet';

export interface CurrentClient {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  pets: Pet[]
}
