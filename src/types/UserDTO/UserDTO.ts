export interface UserInfo {
  id?: number;
  email?: string;
  firstname?: string;
  lastname?: string;
}

export interface TopicPut {
  title: string;
  content:string;
}

export interface Comment {
  id?:number;
  content:string;
  dateTime?:string;
  likes?:number;
  dislake?:number;
  userInfo?:UserInfo;
}

export interface Topic {
  id?:number;
  title:string;
  content:string;
  creationDate?:string;
  lastUpdateDate?:string;
  topicStarter?:UserInfo;
  commentDtoList?:Comment;
}

export interface Profile {
  avatarUrl?:string;
  firstName?:string;
  lastName?:string;
  birthDate?:string;
  discordId?:string;
  telegramId?:string;
}

export interface CommentPut {
  content:string;
}

export interface TopicPost {
  title:string;
  content:string;

}

export interface Notification {
  id?:number;
  content?:string;
  eventDate?:string;
  important?:boolean;
}

export interface UserNotification {
  id?:number;
  user?:UserInfo;
  notification?:Notification;
  show?:boolean;
}

export interface DoctorReview {
  id?:number;
  doctorId?:number;
  review?:Comment;
}
