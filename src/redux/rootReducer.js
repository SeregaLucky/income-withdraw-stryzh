import { combineReducers } from "redux";
import balanceReducer from "./balance/balanceReducer";
// import categoriesReducer from "./categories/categoriesReducer";

export default combineReducers({
  balance: balanceReducer
});
