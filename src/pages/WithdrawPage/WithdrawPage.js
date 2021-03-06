import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './WithdrawPage.module.css';
import balanceS from '../../redux/balance/balanceSelectors';
import { addWithdrawMoneyAC } from '../../redux/balance/balanceActions';
import Controls from '../../components/Controls/Controls';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';
import Categories from '../../components/Categories/Categories';

const WithdrawPage = () => {
  const [isShowCategoties, setIsShow] = useState(false);

  const list = useSelector(state => balanceS.getWithdraw(state));
  const dispatch = useDispatch();

  const addWithdraw = (typeNeed, amount, direction) => {
    dispatch(addWithdrawMoneyAC(typeNeed, amount, direction));
  };

  const toggle = () => setIsShow(state => !state);

  return (
    <section className={styles.withdrawSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Withdraw</h2>

        <button type="button" onClick={toggle} className={styles.toggleButton}>
          {isShowCategoties ? 'Close  Categoties' : 'Show Categoties'}
        </button>

        {isShowCategoties && <Categories type="withdraw" />}

        <Controls type="withdraw" add={addWithdraw} />

        {list.length > 0 && <TransactionHistory list={list} type="withdraw" />}
      </div>
    </section>
  );
};

export default WithdrawPage;
