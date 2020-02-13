import categoriesTypes from "./categoriesTypes";

/* INCOME */
export const addIncomeCategoryAC = () => ({
  type: categoriesTypes.ADD_INCOME_CATEGORY,
  payload: {}
});

export const editIncomeCategoryAC = id => ({
  type: categoriesTypes.EDIT_INCOME_CATEGORY,
  payload: { id }
});

export const removeIncomeCategoryAC = id => ({
  type: categoriesTypes.REMOVE_INCOME_CATEGORY,
  payload: { id }
});

/* WITHDRAW */
export const addWithdrawCategoryAC = () => ({
  type: categoriesTypes.ADD_WITHDRAW_CATEGORY,
  payload: {}
});

export const editWithdrawCategoryAC = id => ({
  type: categoriesTypes.EDIT_WITHDRAW_CATEGORY,
  payload: { id }
});

export const removeWithdrawCategoryAC = id => ({
  type: categoriesTypes.REMOVE_WITHDRAW_CATEGORY,
  payload: { id }
});
