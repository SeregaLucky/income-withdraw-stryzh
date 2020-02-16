import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import categoriesTypes from "./categoriesTypes";
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

//
//
//
//

// const incomeCategoryReducer = (state = OPTIONS_IN, { type, payload }) => {
//   switch (type) {
//     case categoriesTypes.ADD_INCOME_CATEGORY:
//       return [...state, payload.income];

//     case categoriesTypes.EDIT_INCOME_CATEGORY:
//       return state.map(income =>
//         income === payload.incomeDel ? payload.newI : income
//       );

//     case categoriesTypes.REMOVE_INCOME_CATEGORY:
//       return state.filter(income => income !== payload.income);

//     default:
//       return state;
//   }
// };

//
//

// const withdrawCategoryReducer = (state = OPTIONS_W, { type, payload }) => {
//   switch (type) {
//     case categoriesTypes.ADD_WITHDRAW_CATEGORY:
//       return [...state, payload.withdraw];

//     case categoriesTypes.EDIT_WITHDRAW_CATEGORY:
//       return state.map(withdraw =>
//         withdraw === payload.withdrawDel ? payload.newW : withdraw
//       );

//     case categoriesTypes.REMOVE_WITHDRAW_CATEGORY:
//       return state.filter(withdraw => withdraw !== payload.withdraw);

//     default:
//       return state;
//   }
// };
