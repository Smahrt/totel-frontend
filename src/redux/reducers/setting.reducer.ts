import { Setting } from "types/models-types/setting.types";
import {
  ROUTE_CHANGE,
  SET_INITIAL_PATH,
  SettingsActionTypes,
  TOGGLE_NAV_COLLAPSED,
} from "types/action-types/settings.types";

const initialSettings: Setting = {
  navCollapsed: false,
  initialPath: "/",
};

const Settings = (state = initialSettings, action: SettingsActionTypes) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return {
        ...state,
        navCollapsed: false,
      };

    case TOGGLE_NAV_COLLAPSED:
      return {
        ...state,
        navCollapsed: !state.navCollapsed,
      };

    case SET_INITIAL_PATH:
      return {
        ...state,
        initialPath: action.initialPath,
      };

    default:
      return state;
  }
};

export default Settings;
