import React from "react";
import { connect } from "react-redux";
import styles from "./IncomePage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import { addIncomeMoneyAC } from "../../redux/balance/balanceActions";
import Controls from "../../components/Controls/Controls";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";
import Categories from "../../components/Categories/Categories";

const IncomePage = ({ list, allIncome, addIncome }) => {
  // console.log(allIncome);

  return (
    <section className={styles.incomeSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Income</h2>

        <Categories type="income" />

        <Controls type="income" add={addIncome} />

        {list.length > 0 && <TransactionHistory list={list} type="income" />}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  list: balanceSelectors.getIncomeMoney(state)
  // allIncome: balanceSelectors.getAllIncome(state)
});

const mapDispatchToProps = dispatch => ({
  addIncome: (typeNeed, amount, direction) =>
    dispatch(addIncomeMoneyAC(typeNeed, amount, direction))
});

// export default IncomePage;
export default connect(mapStateToProps, mapDispatchToProps)(IncomePage);
