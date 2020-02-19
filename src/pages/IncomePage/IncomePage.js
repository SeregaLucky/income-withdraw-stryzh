import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './IncomePage.module.css';
import balanceS from '../../redux/balance/balanceSelectors';
import { addIncomeMoneyAC } from '../../redux/balance/balanceActions';
import Controls from '../../components/Controls/Controls';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';
import Categories from '../../components/Categories/Categories';

const IncomePage = () => {
  const [isShowCategoties, setIsShow] = useState(false);

  const list = useSelector(state => balanceS.getIncome(state));
  const dispatch = useDispatch();

  const addIncome = (typeNeed, amount, direction) => {
    dispatch(addIncomeMoneyAC(typeNeed, amount, direction));
  };

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

export default IncomePage;
