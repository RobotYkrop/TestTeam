
export interface Topic {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  lastUpdateDate: Date;
  topicStarter: UserInfo;
  commentDtoList?: Comment[];
}

export interface Comment {
	id: number;
	content: string;
	dateTime: Date;
	likes: number;
	dislike: number;
	userInfoDto: UserInfo;
}

export interface UserInfo {
	id: number;
	email: string;
	firstname: string;
	lastname: string;
}
