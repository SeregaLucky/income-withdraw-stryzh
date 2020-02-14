import React from "react";
import { connect } from "react-redux";
import styles from "./IncomePage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import { addIncomeMoneyAC } from "../../redux/balance/balanceActions";
import Controls from "../../components/Controls/Controls";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";

const IncomePage = ({ list, addIncome }) => {
  return (
    <section className={styles.incomeSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Income</h2>

        <Controls type="income" add={addIncome} />

        {list.length > 0 && <TransactionHistory list={list} type="income" />}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  list: balanceSelectors.getIncomeMoney(state)
});

const mapDispatchToProps = dispatch => ({
  addIncome: (typeNeed, amount) => dispatch(addIncomeMoneyAC(typeNeed, amount))
});

// export default IncomePage;
export default connect(mapStateToProps, mapDispatchToProps)(IncomePage);
