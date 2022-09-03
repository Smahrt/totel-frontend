import {
	LOADING,
	GET_APP_NOTIFICATIONS,
	UPDATE_APP_NOTIFICATIONS,
  NotificationActions,
} from "types/action-types/notification.types";
import { AppNotificationsObj } from "types/models-types/notification-model.types";

const initialState: {
	loading: boolean;
	notifications: AppNotificationsObj | null;
} = {
	loading: false,
	notifications: null,
};

const AppNotification = (state = initialState, action: NotificationActions) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_APP_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };

		case UPDATE_APP_NOTIFICATIONS:
			return {
				...state,
				notifications: action.payload,
			};			
			
    default:
      return state;
  }
};
export default AppNotification;
