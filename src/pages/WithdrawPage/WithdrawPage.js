import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import styles from './WithdrawPage.module.css';
import balanceSelectors from '../../redux/balance/balanceSelectors';
import { addWithdrawMoneyAC } from '../../redux/balance/balanceActions';
import Controls from '../../components/Controls/Controls';
import TransactionHistory from '../../components/TransactionHistory/TransactionHistory';
import Categories from '../../components/Categories/Categories';

const WithdrawPage = ({ list, addWithdraw }) => {
  const [isShowCategoties, setIsShow] = useState(false);

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

WithdrawPage.propTypes = {
  list: T.arrayOf(T.shape()).isRequired,
  addWithdraw: T.func.isRequired,
};

const mapStateToProps = state => ({
  list: balanceSelectors.getWithdraw(state),
});

const mapDispatchToProps = dispatch => ({
  addWithdraw: (typeNeed, amount, direction) =>
    dispatch(addWithdrawMoneyAC(typeNeed, amount, direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawPage);
