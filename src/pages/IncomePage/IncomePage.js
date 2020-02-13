import React from "react";
import { connect } from "react-redux";
import styles from "./IncomePage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import { addIncomeMoneyAC } from "../../redux/balance/balanceActions";
import {
  editIncomeMoneyAC,
  removeIncomeMoneyAC
} from "../../redux/balance/balanceActions";
import Controls from "../../components/Controls/Controls";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";

const IncomePage = ({ list, addIncome, changeItem, deleteItem }) => {
  return (
    <section className={styles.incomeSection}>
      <div className={styles.container}>
        <div>
          <h2>Общая сумма</h2>
        </div>

        <Controls type="income" add={addIncome} />

        {list.length > 0 && (
          <TransactionHistory
            list={list}
            changeItem={changeItem}
            deleteItem={deleteItem}
          />
        )}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  list: balanceSelectors.getIncomeMoney(state)
});

const mapDispatchToProps = dispatch => ({
  addIncome: (typeNeed, amount) => dispatch(addIncomeMoneyAC(typeNeed, amount)),
  changeItem: (id, amount) => dispatch(editIncomeMoneyAC(id, amount)),
  deleteItem: id => dispatch(removeIncomeMoneyAC(id))
});

// export default IncomePage;
export default connect(mapStateToProps, mapDispatchToProps)(IncomePage);
