import { createSelector } from "reselect";

/* INCOME */
const getIncomeMoney = state => state.balance.incomeMoney;

const getByIdIncomeMoney = (state, id) => {
  // console.log("getByIdIncomeMoney");
  return getIncomeMoney(state).find(item => item.id === id);
};

//
//

/* EITHDRAW */
const getWithdrawMoney = state => state.balance.withdrawMoney;

const getByIdWithdrawMoney = (state, id) => {
  // console.log("getByIdWithdrawMoney");
  return getWithdrawMoney(state).find(item => item.id === id);
};

export default {
  getIncomeMoney,
  getByIdIncomeMoney,
  getWithdrawMoney,
  getByIdWithdrawMoney
};

//
//
//
//

//
//
//
//

// import { createSelector } from "reselect";

// /* INCOME */
// const getMoney = state => {
//   // console.log("getMoney");
//   return state.balance.money;
// };

//
//

// // const getIncomeMoney = createSelector([getMoney], allList => {
// //   // console.log("getIncomeMoney");
// //   return allList.filter(item => item.type === "income");
// // });
// const getIncomeMoney = state => state.balance.incomeMoney;

// const getByIdIncomeMoney = (state, id) => {
//   // console.log("getByIdIncomeMoney");
//   return getIncomeMoney(state).find(item => item.id === id);
// };

// //
// //

// /* EITHDRAW */
// // const getWithdrawMoney = createSelector([getMoney], allList => {
// //   // console.log("getWithdrawMoney");
// //   return allList.filter(item => item.type === "withdraw");
// // });
// const getWithdrawMoney = state => state.balance.withdrawMoney;

// const getByIdWithdrawMoney = (state, id) => {
//   // console.log("getByIdWithdrawMoney");
//   return getWithdrawMoney(state).find(item => item.id === id);
// };

// export default {
//   getMoney,
//   getIncomeMoney,
//   getByIdIncomeMoney,
//   getWithdrawMoney,
//   getByIdWithdrawMoney
// };
