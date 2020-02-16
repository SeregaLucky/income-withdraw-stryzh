import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import categoriesT from "./categoriesTypes";

const OPTIONS_IN = [
  "Основной",
  "Дополнительный",
  "Вернули долг",
  "Неожиданный",
  "Подарили"
];

const OPTIONS_W = [
  "На еду",
  "На жилье",
  "На спорт",
  "На здороевье",
  "На девушку",
  "На любовницу",
  "На бензин"
];

/* INCOME */
const incomeCategoryReducer = createReducer(OPTIONS_IN, {
  [categoriesT.ADD_INCOME_CATEGORY]: (state, { payload }) => [
    ...state,
    payload.income
  ],

  [categoriesT.EDIT_INCOME_CATEGORY]: (state, { payload }) =>
    state.map(income => (income === payload.incomeDel ? payload.newI : income)),

  [categoriesT.REMOVE_INCOME_CATEGORY]: (state, { payload }) =>
    state.filter(income => income !== payload.income)
});

/* WITHDRAW */
const withdrawCategoryReducer = createReducer(OPTIONS_W, {
  [categoriesT.ADD_WITHDRAW_CATEGORY]: (state, { payload }) => [
    ...state,
    payload.withdraw
  ],

  [categoriesT.EDIT_WITHDRAW_CATEGORY]: (state, { payload }) =>
    state.map(withdraw =>
      withdraw === payload.withdrawDel ? payload.newW : withdraw
    ),

  [categoriesT.REMOVE_WITHDRAW_CATEGORY]: (state, { payload }) =>
    state.filter(withdraw => withdraw !== payload.withdraw)
});

export default combineReducers({
  incomeCategory: incomeCategoryReducer,
  withdrawCategory: withdrawCategoryReducer
});
