import balanceTypes from "./balanceTypes";
import shortid from "shortid";

const OPTION = {
  year: "numeric",
  day: "numeric",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};

/* INCOME */
export const addIncomeMoneyAC = (type, amount) => {
  const date = new Date();

  const obj = {
    id: shortid.generate(),
    type,
    amount,
    date: date.toLocaleString("en-US", OPTION)
  };

  return {
    type: balanceTypes.ADD_INCOME_MONEY,
    payload: { obj }
  };
};

export const editIncomeMoneyAC = (id, amount) => {
  // console.log(id);
  // console.log(amount);
  return {
    type: balanceTypes.EDIT_INCOME_MONEY,
    payload: { id, amount }
  };
};

export const removeIncomeMoneyAC = id => ({
  type: balanceTypes.REMOVE_INCOME_MONEY,
  payload: { id }
});

/* WITHDRAW */
export const addWithdrawMoneyAC = (typeNeed, amount) => {
  const date = new Date();
  // console.log(typeNeed);

  const obj = {
    id: shortid.generate(),
    type: typeNeed,
    amount,
    date: date.toLocaleString("en-US", OPTION)
  };
  return {
    type: balanceTypes.ADD_WITHDRAW_MONEY,
    payload: { obj }
  };
};

export const editWithdrawMoneyAC = (id, amount) => {
  // console.log(id);
  return {
    type: balanceTypes.EDIT_WITHDRAW_MONEY,
    payload: { id, amount }
  };
};

export const removeWithdrawMoneyAC = id => {
  return {
    type: balanceTypes.REMOVE_WITHDRAW_MONEY,
    payload: { id }
  };
};
