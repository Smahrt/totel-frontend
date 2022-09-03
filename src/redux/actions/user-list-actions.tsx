import { Dispatch } from "redux";
import { AppActions } from "types";
import { fetchError, fetchStart, fetchSuccess } from "./common-actions";
// import { GET_USER_LIST } from "types/action-types/user-list.types";
// import jwtAxios from "services/auth/jwt-auth/jwt-auth-service";
import { appIntl } from "utils/helper/Utils";

export const onGetUserList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    // jwtAxios.jsonAxios
    //   .get("/api/user/list")
    //   .then((data) => {
    //     if (data.status === 200) {
    //       dispatch(fetchSuccess());
    //       dispatch({ type: GET_USER_LIST, payload: data.data });
    //     } else {
    //       dispatch(fetchError(String(messages["message.somethingWentWrong"])));
    //     }
    //   })
    //   .catch((error) => {
    //     dispatch(fetchError(error.message));
    //   });
  };
};
