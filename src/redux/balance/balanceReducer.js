import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import balanceT from './balanceTypes';

/* INCOME */
const incomeMoneyReducer = createReducer([], {
  [balanceT.ADD_INCOME_MONEY]: (state, { payload }) => [...state, payload.obj],

  [balanceT.EDIT_INCOME_MONEY]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id ? { ...item, amount: payload.amount } : item,
    ),

  [balanceT.REMOVE_INCOME_MONEY]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
});

/* WITHDRAW */
const withdrawMoneyReducer = createReducer([], {
  [balanceT.ADD_WITHDRAW_MONEY]: (state, { payload }) => [
    ...state,
    payload.obj,
  ],

  [balanceT.EDIT_WITHDRAW_MONEY]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id ? { ...item, amount: payload.amount } : item,
    ),

  [balanceT.REMOVE_WITHDRAW_MONEY]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
});

/* ALL */
const filterByDateReducer = createReducer(null, {
  [balanceT.ADD_FILTER_BY_DATE]: (state, { payload }) => payload,
  [balanceT.DELETE_FILTER_BY_DATE]: () => null,
});

export default combineReducers({
  incomeMoney: incomeMoneyReducer,
  withdrawMoney: withdrawMoneyReducer,
  filterByDate: filterByDateReducer,
});
