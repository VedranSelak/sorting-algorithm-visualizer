import { combineReducers } from "redux";
import sortingReducer from "./store/sorting.slice";
import uiReducer from "./store/ui.slice";

export const rootReducer = combineReducers({
  sorting: sortingReducer,
  ui: uiReducer,
});
