import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BalancePage.module.css';
import balanceS from '../../redux/balance/balanceSelectors';
import ResultProgressBar from '../../components/ResultProgressBar/ResultProgressBar';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import CalendarMy from '../../components/Calendar/Calendar';

const BalancePage = () => {
  const income = useSelector(state => balanceS.getAmountIncome(state));
  const allIncome = useSelector(state => balanceS.getFilterIncome(state));

  const withdraw = useSelector(state => balanceS.getAmountWithdraw(state));
  const allWithdraw = useSelector(state => balanceS.getFilterWithdraw(state));

  const balance = income - withdraw;
  const all = income + withdraw;

  return (
    <section className={styles.alanceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Balance page</h2>

        <CalendarMy />

        {all && (
          <ul className={styles.list}>
            <li className={styles.item}>Balance: {balance}$</li>
            <li className={styles.item}>Income: {income}$</li>
            <li className={styles.item}>Withdraw: {withdraw}$</li>
          </ul>
        )}

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

export default BalancePage;
