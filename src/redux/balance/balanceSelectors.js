import { createSelector } from "reselect";

/* INCOME */
const getIncomeMoney = state => state.balance.incomeMoney;

const getByIdIncomeMoney = (state, id) =>
  getIncomeMoney(state).find(item => item.id === id);

/* EITHDRAW */
const getWithdrawMoney = state => state.balance.withdrawMoney;

const getByIdWithdrawMoney = (state, id) =>
  getIncomeMoney(state).find(item => item.id === id);

export default {
  getIncomeMoney,
  getByIdIncomeMoney,
  getWithdrawMoney,
  getByIdWithdrawMoney
};
