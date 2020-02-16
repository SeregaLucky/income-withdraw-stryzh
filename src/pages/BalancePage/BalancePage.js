import React from "react";
import { connect } from "react-redux";
import styles from "./BalancePage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import ResultProgressBar from "../../components/ResultProgressBar/ResultProgressBar";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import CalendarMy from "../../components/Calendar/Calendar";

const BalancePage = ({
  income,
  withdraw,
  allIncome,
  allWithdraw,
  // getAllFilter,
  getAllFilter222
}) => {
  const balance = income - withdraw;
  const all = income + withdraw;
  console.log(getAllFilter222);

  return (
    <section className={styles.alanceSection}>
      <div className={styles.container}>
        <CalendarMy />

        <h2 className={styles.title}>Balance page</h2>

        <ul className={styles.list}>
          <li className={styles.item}>Balance: {balance}$</li>
          <li className={styles.item}>Income: {income}$</li>
          <li className={styles.item}>Withdraw: {withdraw}$</li>
        </ul>

        {all > 0 && <ResultProgressBar income={income} all={all} />}

        <ul className={styles.listBar}>
          <li className={styles.itemBar}>
            <CategoryBar all={allIncome} title="Income" />
          </li>
          <li className={styles.itemBar}>
            <CategoryBar all={allWithdraw} title="Withdraw" />
          </li>
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  income: balanceSelectors.getIncome(state),
  withdraw: balanceSelectors.getWithdraw(state),
  allIncome: balanceSelectors.getAllIncomeNew(state),
  allWithdraw: balanceSelectors.getAllWithdrawNew(state),

  // getAllFilter: balanceSelectors.getAllFilterByDate(state),
  getAllFilter222: balanceSelectors.getAllFilterByDate222(state)
});

export default connect(mapStateToProps)(BalancePage);
