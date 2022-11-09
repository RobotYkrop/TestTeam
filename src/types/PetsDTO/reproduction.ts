export interface Reproduction {
  id: number,
  estrusStart: string,
  mating: string,
  dueDate: string,
  childCount: number
}

export interface UpdateReproduction {
  estrusStart: string,
  mating: string,
  dueDate: string,
  childCount: number
}
