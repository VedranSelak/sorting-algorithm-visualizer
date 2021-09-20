import { combineReducers } from "redux";
import sortingReducer from "./store/sorting.slice";

export const rootReducer = combineReducers({
  sorting: sortingReducer,
});
