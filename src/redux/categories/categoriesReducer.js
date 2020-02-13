import { combineReducers } from "redux";
import categoriesTypes from "./categoriesTypes";

const incomeCategoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case categoriesTypes.ADD_INCOME_CATEGORY:
      return state;

    case categoriesTypes.EDIT_INCOME_CATEGORY:
      return state;

    case categoriesTypes.REMOVE_INCOME_CATEGORY:
      return state;

    default:
      return state;
  }
};

const withdrawCategoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case categoriesTypes.ADD_WITHDRAW_CATEGORY:
      return state;

    case categoriesTypes.EDIT_WITHDRAW_CATEGORY:
      return state;

    case categoriesTypes.REMOVE_WITHDRAW_CATEGORY:
      return state;

    default:
      return state;
  }
};

export default combineReducers({
  incomeCategory: incomeCategoryReducer,
  withdrawCategory: withdrawCategoryReducer
});
