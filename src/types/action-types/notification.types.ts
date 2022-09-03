import { AppNotificationsObj } from '../models-types/notification-model.types';

export const LOADING = "LOADING";
export const GET_APP_NOTIFICATIONS = "GET_APP_NOTIFICATIONS";
export const UPDATE_APP_NOTIFICATIONS = "UPDATE_APP_NOTIFICATIONS";

export interface SetLoading {
  type: typeof LOADING;
  payload: boolean;
}

export interface GetNotificationsActions {
  type: typeof GET_APP_NOTIFICATIONS;
  payload: AppNotificationsObj;
}

export interface UpdateNotificationsActions {
  type: typeof UPDATE_APP_NOTIFICATIONS;
  payload: AppNotificationsObj;
}

export type NotificationActions =
	| SetLoading
	| GetNotificationsActions
	| UpdateNotificationsActions;
