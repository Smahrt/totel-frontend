import Common from "./common.reducer";
import Dashboard from "./dashboard.reducer";
import Settings from "./setting.reducer";
import Notification from "./notification.reducer";

const reducers = {
	dashboard: Dashboard,
  settings: Settings,
	appNotification: Notification,
  common: Common
};

export default reducers;
