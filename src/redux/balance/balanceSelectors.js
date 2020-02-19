import { createSelector } from 'reselect';

/*
 * ALL
 */
const getDateFilter = state => state.balance.filterByDate;

/*
 * INCOME
 */
const getIncome = state => state.balance.incomeMoney;

const getByIdIncome = (state, id) => {
  return getIncome(state).find(item => item.id === id);
};

const getIncomeFilterByDate = createSelector(
  [getIncome, getDateFilter],
  (allIncome, filterByDate) => {
    if (!filterByDate) return allIncome;

    const filterIncome = allIncome.filter(item => {
      const itemDate = new Date(item.date);
      if (filterByDate.from <= itemDate && filterByDate.to >= itemDate) {
        return item;
      }
      return null;
    });

    return filterIncome;
  },
);

const getAmountIncome = createSelector([getIncomeFilterByDate], incomeMoney => {
  return incomeMoney.reduce((acc, next) => acc + next.amount, 0);
});

const getFilterIncome = createSelector([getIncomeFilterByDate], incomeMoney => {
  const allDirections = incomeMoney.map(item => {
    const { direction } = item;
    return direction;
  });

  let uniquelDirections = new Set(allDirections);
  uniquelDirections = Array.from(uniquelDirections);

  const defaultObjlDirections = uniquelDirections.reduce((acc, next) => {
    acc[next] = 0;
    return acc;
  }, {});

  const allIncome = incomeMoney.reduce((acc, next) => {
    return {
      ...acc,
      [next.direction]: acc[next.direction] + next.amount,
    };
  }, defaultObjlDirections);

  const allKeys = Object.keys(allIncome);
  const allValues = Object.values(allIncome);

  return { allKeys, allValues };
});

/*
 * WITHDRAW
 */
const getWithdraw = state => state.balance.withdrawMoney;

const getByIdWithdraw = (state, id) => {
  return getWithdraw(state).find(item => item.id === id);
};

const getWithdrawFilterByDate = createSelector(
  [getWithdraw, getDateFilter],
  (allWithdraw, filterByDate) => {
    if (!filterByDate) return allWithdraw;

    const filterWithdraw = allWithdraw.filter(item => {
      const itemDate = new Date(item.date);
      if (filterByDate.from <= itemDate && filterByDate.to >= itemDate) {
        return item;
      }
      return null;
    });

    return filterWithdraw;
  },
);

const getAmountWithdraw = createSelector(
  [getWithdrawFilterByDate],
  withdrawMoney => {
    return withdrawMoney.reduce((acc, next) => acc + next.amount, 0);
  },
);

const getFilterWithdraw = createSelector(
  [getWithdrawFilterByDate],
  withdrawMoney => {
    const allDirections = withdrawMoney.map(item => {
      const { direction } = item;
      return direction;
    });

    let uniquelDirections = new Set(allDirections);
    uniquelDirections = Array.from(uniquelDirections);

    const defaultObjlDirections = uniquelDirections.reduce((acc, next) => {
      acc[next] = 0;
      return acc;
    }, {});

    const allIncome = withdrawMoney.reduce((acc, next) => {
      return {
        ...acc,
        [next.direction]: acc[next.direction] + next.amount,
      };
    }, defaultObjlDirections);

    const allKeys = Object.keys(allIncome);
    const allValues = Object.values(allIncome);

    return { allKeys, allValues };
  },
);

export default {
  getDateFilter,

  getIncome,
  getAmountIncome,
  getByIdIncome,
  getFilterIncome,

  getWithdraw,
  getAmountWithdraw,
  getByIdWithdraw,
  getFilterWithdraw,
};
