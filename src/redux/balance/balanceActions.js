import balanceTypes from "./balanceTypes";
import shortid from "shortid";

/* INCOME */
export const addIncomeMoneyAC = (type, amount, direction) => {
  const obj = {
    id: shortid.generate(),
    type,
    amount,
    direction: direction.join(),
    date: new Date()
  };

  return {
    type: balanceTypes.ADD_INCOME_MONEY,
    payload: { obj }
  };
};

export const editIncomeMoneyAC = (id, amount) => ({
  type: balanceTypes.EDIT_INCOME_MONEY,
  payload: { id, amount }
});

export const removeIncomeMoneyAC = id => ({
  type: balanceTypes.REMOVE_INCOME_MONEY,
  payload: { id }
});

/* WITHDRAW */
export const addWithdrawMoneyAC = (typeNeed, amount, direction) => {
  const obj = {
    id: shortid.generate(),
    type: typeNeed,
    amount,
    direction: direction.join(),
    date: new Date()
  };

  return {
    type: balanceTypes.ADD_WITHDRAW_MONEY,
    payload: { obj }
  };
};

export const editWithdrawMoneyAC = (id, amount) => ({
  type: balanceTypes.EDIT_WITHDRAW_MONEY,
  payload: { id, amount }
});

export const removeWithdrawMoneyAC = id => ({
  type: balanceTypes.REMOVE_WITHDRAW_MONEY,
  payload: { id }
});

/* ALL */
export const addFilterByDateAC = (from, to) => ({
  type: balanceTypes.ADD_FILTER_BY_DATE,
  payload: { from, to }
});

export const deleteFilterByDateAC = () => ({
  type: balanceTypes.DELETE_FILTER_BY_DATE
});
