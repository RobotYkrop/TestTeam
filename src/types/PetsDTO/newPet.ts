import { Pets, PetsGender, PetsSize } from './petEnums';

export interface NewPet {
  name: string,
  petType: string,
  birthDay: string,
  gender: PetsGender,
  breed: string,
  color: string,
  size: PetsSize,
  weight: number,
  description: string,
  avatar: string,
  notificationCount: number
}

export interface NewPetPesponse {
  name: string,
  petType: Pets,
  birthDay: string,
  gender: PetsGender,
  breed: string,
  color: string,
  size: PetsSize,
  weight: number,
  description: string
}
