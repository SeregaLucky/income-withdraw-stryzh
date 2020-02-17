import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import styles from './IncomePage.module.css';
import balanceSelectors from '../../redux/balance/balanceSelectors';
import { addIncomeMoneyAC } from '../../redux/balance/balanceActions';
import Controls from '../../components/Controls/Controls';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';
import Categories from '../../components/Categories/Categories';

const IncomePage = ({ list, addIncome }) => {
  const [isShowCategoties, setIsShow] = useState(false);

  const toggle = () => setIsShow(state => !state);

  return (
    <section className={styles.incomeSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Income</h2>

        <button type="button" onClick={toggle} className={styles.toggleButton}>
          {isShowCategoties ? 'Close  Categoties' : 'Show Categoties'}
        </button>

        {isShowCategoties && <Categories type="income" />}

        <Controls type="income" add={addIncome} />

        {list.length > 0 && <TransactionHistory list={list} type="income" />}
      </div>
    </section>
  );
};

IncomePage.propTypes = {
  list: T.arrayOf(T.shape()).isRequired,
  addIncome: T.func.isRequired,
};

const mapStateToProps = state => ({
  list: balanceSelectors.getIncome(state),
});

const mapDispatchToProps = dispatch => ({
  addIncome: (typeNeed, amount, direction) =>
    dispatch(addIncomeMoneyAC(typeNeed, amount, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomePage);
