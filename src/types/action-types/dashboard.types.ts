import { Widgets } from '../models-types/widgets.types';

export const GET_WIDGETS_DATA = "GET_WIDGETS_DATA";

export interface GetWidgetsAction {
  type: typeof GET_WIDGETS_DATA;
  payload: Widgets;
}

export type DashboardActionTypes =
  | GetWidgetsAction;
