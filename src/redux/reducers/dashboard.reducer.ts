import {
  DashboardActionTypes,
  GET_WIDGETS_DATA,
} from "types/action-types/dashboard.types";
import { Widgets } from "types/models-types/widgets.types";

const initialState: {
  widgetsData: Widgets | null;
} = {
  widgetsData: null,
};

const Dashboard = (state = initialState, action: DashboardActionTypes) => {
  switch (action.type) {
    case GET_WIDGETS_DATA:
      return {
        ...state,
        widgetsData: action.payload,
      };

    default:
      return state;
  }
};
export default Dashboard;
