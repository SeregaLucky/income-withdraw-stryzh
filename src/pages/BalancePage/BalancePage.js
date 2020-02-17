import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import styles from './BalancePage.module.css';
import balanceSelectors from '../../redux/balance/balanceSelectors';
import ResultProgressBar from '../../components/ResultProgressBar/ResultProgressBar';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import CalendarMy from '../../components/Calendar/Calendar';

const BalancePage = ({ income, withdraw, allIncome, allWithdraw }) => {
  const balance = income - withdraw;
  const all = income + withdraw;

  return (
    <section className={styles.alanceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Balance page</h2>

        <CalendarMy />

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

BalancePage.propTypes = {
  income: T.number.isRequired,
  allIncome: T.shape({}).isRequired,
  withdraw: T.number.isRequired,
  allWithdraw: T.shape({}).isRequired,
};

const mapStateToProps = state => ({
  income: balanceSelectors.getAmountIncome(state),
  allIncome: balanceSelectors.getFilterIncome(state),

  withdraw: balanceSelectors.getAmountWithdraw(state),
  allWithdraw: balanceSelectors.getFilterWithdraw(state),
});

export default connect(mapStateToProps)(BalancePage);
