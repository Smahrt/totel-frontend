import { Dispatch } from "redux";
import { AppActions } from "types";
import { fetchError, fetchStart, fetchSuccess } from "./common-actions";
import { appIntl } from "utils/helper/Utils";
// import jwtAxios from "services/auth/jwt-auth/jwt-auth-service";
import {
	GET_APP_NOTIFICATIONS,
	UPDATE_APP_NOTIFICATIONS
} from "types/action-types/notification.types";
import { MessageDataObj } from "types/models-types/notification-model.types";

export const getAppNotifications = (last = '', page: number = 1, limit: number = 10) => {
	const url = `notifications?limit=${limit}&page=${page}&last=${last}`;

  return (dispatch: Dispatch<AppActions>, getState: any) => {
    // jwtAxios.jsonAxios
    //   .get(url)
    //   .then((res) => {
    //     if (res.status === 200) {
		// 			dispatch({ type: GET_APP_NOTIFICATIONS, payload: res.data });
    //     } else {
    //       dispatch(fetchError(String(messages["message.somethingWentWrong"])));
    //     }
    //   })
    //   .catch((error) => {
    //     dispatch(fetchError(error.message));
    //   });
  };
};

export const updateNotificationsToRead = () => {
  return (dispatch: Dispatch<AppActions>, getState: any) => {
		if(getState().appNotification.notifications.data.length) {
			const url = `notifications/update`;

			// jwtAxios.jsonAxios
			//   .put(url)
			//   .then((res) => {	
			//     if (res.status === 200) {
			// 			let result = getState().appNotification.notifications.data.map(e => {
			// 				e.isRead = true;
			// 				return e;
			// 			})
	
			// 			dispatch({
			// 				type: UPDATE_APP_NOTIFICATIONS,
			// 				payload: 	{
			// 					...getState().appNotification.notifications,
			// 					notifications: result,					
			// 				},			
			// 			});
	
			//     } else {
			//       dispatch(fetchError(String(messages["message.somethingWentWrong"])));
			//     }
			//   })
			//   .catch((error) => {
			//     dispatch(fetchError(error.message));
			//   });
		}

  };
};