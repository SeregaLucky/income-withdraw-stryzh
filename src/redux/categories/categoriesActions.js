import categoriesTypes from "./categoriesTypes";

/* INCOME */
export const addIncomeCategoryAC = income => ({
  type: categoriesTypes.ADD_INCOME_CATEGORY,
  payload: { income }
});

export const editIncomeCategoryAC = (incomeDel, newI) => ({
  type: categoriesTypes.EDIT_INCOME_CATEGORY,
  payload: { incomeDel, newI }
});

export const removeIncomeCategoryAC = income => ({
  type: categoriesTypes.REMOVE_INCOME_CATEGORY,
  payload: { income }
});

/* WITHDRAW */
export const addWithdrawCategoryAC = withdraw => ({
  type: categoriesTypes.ADD_WITHDRAW_CATEGORY,
  payload: { withdraw }
});

export const editWithdrawCategoryAC = (withdrawDel, newW) => ({
  type: categoriesTypes.EDIT_WITHDRAW_CATEGORY,
  payload: { withdrawDel, newW }
});

export const removeWithdrawCategoryAC = withdraw => {
  // console.log(withdraw);
  return {
    type: categoriesTypes.REMOVE_WITHDRAW_CATEGORY,
    payload: { withdraw }
  };
};
