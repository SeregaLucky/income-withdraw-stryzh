import { createSelector } from "reselect";
import { createStore } from "redux";

/* FILTER ALL */
const getAllFilterByDate = state => state.balance.filterByDate;

/* INCOME */
const getIncomeMoney = state => state.balance.incomeMoney;

const getIncome = createSelector([getIncomeMoney], incomeMoney => {
  return incomeMoney.reduce((acc, next) => acc + next.amount, 0);
});

const getByIdIncomeMoney = (state, id) => {
  return getIncomeMoney(state).find(item => item.id === id);
};

const getAllIncome = createSelector([getIncomeMoney], incomeMoney => {
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
      [next.direction]: acc[next.direction] + next.amount
    };
  }, defaultObjlDirections);
  return allIncome;
});

const getAllIncomeNew = createSelector([getIncomeMoney], incomeMoney => {
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
      [next.direction]: acc[next.direction] + next.amount
    };
  }, defaultObjlDirections);

  const allKeys = Object.keys(allIncome);
  const allValues = Object.values(allIncome);

  return { allKeys, allValues };
});

const getAllFilterByDate222 = createSelector(
  [getIncomeMoney, getAllFilterByDate],
  (allInc, filterByDate) => {
    if (!filterByDate) return allInc;

    /* FILTER BY DATE */
    const filterIncome = allInc.filter(item => {
      if (filterByDate.from <= item.date2 && filterByDate.to >= item.date2) {
        return item;
      }
      return null;
    });

    return filterIncome;
  }
);

// const getAllFilterByDate222 = state => {
//   const allInc = getIncomeMoney(state);
//   const filterByDate = getAllFilterByDate(state);

//   if (!filterByDate) return allInc;

//   /* FILTER BY DATE */
//   const filterIncome = allInc.filter(item => {
//     if (filterByDate.from <= item.date2 && filterByDate.to >= item.date2) {
//       return item;
//     }
//     return null;
//   });

//   return filterIncome;
// };

/* EITHDRAW */
const getWithdrawMoney = state => state.balance.withdrawMoney;

const getWithdraw = createSelector([getWithdrawMoney], withdrawMoney => {
  return withdrawMoney.reduce((acc, next) => acc + next.amount, 0);
});

const getByIdWithdrawMoney = (state, id) => {
  return getWithdrawMoney(state).find(item => item.id === id);
};

const getAllWithdraw = createSelector([getWithdrawMoney], withdrawMoney => {
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

  const allWithdraw = withdrawMoney.reduce((acc, next) => {
    return {
      ...acc,
      [next.direction]: acc[next.direction] + next.amount
    };
  }, defaultObjlDirections);
  return allWithdraw;
});

const getAllWithdrawNew = createSelector([getWithdrawMoney], withdrawMoney => {
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
      [next.direction]: acc[next.direction] + next.amount
    };
  }, defaultObjlDirections);

  const allKeys = Object.keys(allIncome);
  const allValues = Object.values(allIncome);

  return { allKeys, allValues };
});

export default {
  getIncomeMoney,
  getIncome,
  getByIdIncomeMoney,
  // getAllIncome,
  getAllIncomeNew,

  getWithdrawMoney,
  getWithdraw,
  getByIdWithdrawMoney,
  // getAllWithdraw,
  getAllWithdrawNew,

  getAllFilterByDate222
};

//
//

// const getAllFilterByDate222 = state => {
//   const allInc = getIncomeMoney(state);
//   const allW = getWithdrawMoney(state);
//   const filterByDate = getAllFilterByDate(state);

//   if (!filterByDate) {
//     // return null;
//     return { allInc, allW };
//   }

//   /* FILTER BY DATE */
//   const filterIncome = allInc.filter(income => {
//     if (filterByDate.from <= income.date2 && filterByDate.to >= income.date2) {
//       return income;
//     }
//     return null;
//   });

//   const filterWithdraw = allW.filter(withdraw => {
//     if (
//       filterByDate.from <= withdraw.date2 &&
//       filterByDate.to >= withdraw.date2
//     ) {
//       return withdraw;
//     }
//     return null;
//   });

//   // return filterIncome;
//   return { filterIncome, filterWithdraw };
// };
