import { fetchError, fetchStart, fetchSuccess } from "./common-actions";
import { AppActions } from "types";
import { Dispatch } from "redux";
import {
  GET_WIDGETS_DATA,
} from "types/action-types/dashboard.types";
// import jwtAxios from "services/auth/jwt-auth/jwt-auth-service";


export const onGetWidgetsData = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    // jwtAxios.jsonAxios
    //   .get("/dashboard/widgets")
    //   .then((data) => {
    //     if (data.status === 200) {
    //       dispatch(fetchSuccess());
    //       dispatch({ type: GET_WIDGETS_DATA, payload: data.data });
    //     } else {
    //       dispatch(fetchError("Something went wrong, Please try again!"));
    //     }
    //   })
    //   .catch((error) => {
    //     dispatch(fetchError(error.message));
    //   });
  };
};
