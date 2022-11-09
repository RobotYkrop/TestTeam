export interface News {
  id: number,
  title: string,
  type: string,
  content: string,
  important: boolean
}

export interface GetNews {
  id: number;
  title: string;
  content: string;
  type: string;
  endTime: Date;
  published: boolean;
  pictures: string[];
  important: boolean;
}
