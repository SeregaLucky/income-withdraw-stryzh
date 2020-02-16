import React from "react";
import { connect } from "react-redux";
import styles from "./WithdrawPage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import { addWithdrawMoneyAC } from "../../redux/balance/balanceActions";
import Controls from "../../components/Controls/Controls";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import Categories from "../../components/Categories/Categories";

const WithdrawPage = ({ list, addWithdraw }) => {
  return (
    <section className={styles.withdrawSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Withdraw</h2>

        <Categories type="withdraw" />

        <Controls type="withdraw" add={addWithdraw} />

        {list.length > 0 && <TransactionHistory list={list} type="withdraw" />}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  list: balanceSelectors.getWithdrawMoney(state)
});

const mapDispatchToProps = dispatch => ({
  addWithdraw: (typeNeed, amount, direction) =>
    dispatch(addWithdrawMoneyAC(typeNeed, amount, direction))
});

// export default WithdrawPage;
export default connect(mapStateToProps, mapDispatchToProps)(WithdrawPage);
