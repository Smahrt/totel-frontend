export interface UserObj {
  id: string | number;
	firstName?: string;
	lastName?: string;
  fullName?: string;
	profilePic?: any;
}

export interface MessageDataObj {
  id?: number;
  sender: UserObj;
	receiver: UserObj;
  message?: string;
  time: string;
  edited?: boolean;
}

export interface AppNotificationDataObj {
  id?: number | string;
	isRead: boolean;
	receiver: UserObj;
  notification: any;
}

export interface AppNotificationsObj {
	currentPage: number;
  data: AppNotificationDataObj[];
	firstItem?: number;
	lastItem?: number;
	lastPage?: number;
	total: number
	first_page_url?: string;
	last_page_url?: string;
	next_page_url?: string;
	prev_page_url?: string;
	perPage: string | number;
}

