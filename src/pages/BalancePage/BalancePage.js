import React from "react";
import { connect } from "react-redux";
import styles from "./BalancePage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";

const BalancePage = ({ incomeMoney, withdrawMoney }) => {
  const income = incomeMoney.reduce((acc, next) => acc + next.amount, 0);
  const withdraw = withdrawMoney.reduce((acc, next) => acc + next.amount, 0);
  const balance = income - withdraw;

  return (
    <section className={styles.alanceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Balance page</h2>

        <ul className={styles.list}>
          <li className={styles.item}>Balance: {balance}$</li>
          <li className={styles.item}>Income: {income}$</li>
          <li className={styles.item}>Withdraw: {withdraw}$</li>
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  incomeMoney: balanceSelectors.getIncomeMoney(state),
  withdrawMoney: balanceSelectors.getWithdrawMoney(state)
});

export default connect(mapStateToProps)(BalancePage);

//
//
//
//

//
//
//
//

// import React from "react";
// import { connect } from "react-redux";
// import styles from "./BalancePage.module.css";
// import balanceSelectors from "../../redux/balance/balanceSelectors";

// const BalancePage = ({ allMoney, incomeMoney, withdrawMoney }) => {
//   // const incomeAndWihdraw = allMoney.reduce(
//   //   (acc, next) => {
//   //     return {
//   //       ...acc,
//   //       [next.type]: acc[next.type] + next.amount
//   //     };
//   //   },
//   //   { income: 0, withdraw: 0 }
//   // );

//   // const balance = incomeAndWihdraw.income - incomeAndWihdraw.withdraw;
//   // const { income, withdraw } = incomeAndWihdraw;

//   const income = incomeMoney.reduce((acc, next) => acc + next.amount, 0);
//   const withdraw = withdrawMoney.reduce((acc, next) => acc + next.amount, 0);

//   const balance = income - withdraw;

//   return (
//     <section className={styles.alanceSection}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Balance page</h2>

//         <ul className={styles.list}>
//           <li className={styles.item}>Balance: {balance}$</li>
//           <li className={styles.item}>Income: {income}$</li>
//           <li className={styles.item}>Withdraw: {withdraw}$</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// const mapStateToProps = state => ({
//   // allMoney: balanceSelectors.getMoney(state),
//   incomeMoney: balanceSelectors.getIncomeMoney(state),
//   withdrawMoney: balanceSelectors.getWithdrawMoney(state)
// });

// export default connect(mapStateToProps)(BalancePage);
