import { combineReducers } from "redux";
import balanceTypes from "./balanceTypes";

const incomeMoneyReducer = (state = [], { type, payload }) => {
  switch (type) {
    case balanceTypes.ADD_INCOME_MONEY:
      return [...state, payload.obj];

    case balanceTypes.EDIT_INCOME_MONEY:
      return state.map(item =>
        item.id === payload.id ? { ...item, amount: payload.amount } : item
      );

    case balanceTypes.REMOVE_INCOME_MONEY:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

const withdrawMoneyReducer = (state = [], { type, payload }) => {
  switch (type) {
    case balanceTypes.ADD_WITHDRAW_MONEY:
      return [...state, payload.obj];

    case balanceTypes.EDIT_WITHDRAW_MONEY:
      return state.map(item =>
        item.id === payload.id ? { ...item, amount: payload.amount } : item
      );
    //

    case balanceTypes.REMOVE_WITHDRAW_MONEY:
      return state.filter(item => item.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  incomeMoney: incomeMoneyReducer,
  withdrawMoney: withdrawMoneyReducer
});
