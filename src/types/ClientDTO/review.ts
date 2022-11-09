export interface Review {
  id: number,
  doctorId: number,
  review: {
    id: number,
    content: string,
    dateTime: string,
    likes: number,
    dislike: number,
    userInfoDto: {
      id: number,
      email: string,
      firstname: string,
      lastname: string
    }
  }
}
