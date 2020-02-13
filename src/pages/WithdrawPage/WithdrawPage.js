import React from "react";
import { connect } from "react-redux";
import styles from "./WithdrawPage.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import { addWithdrawMoneyAC } from "../../redux/balance/balanceActions";
import {
  editWithdrawMoneyAC,
  removeWithdrawMoneyAC
} from "../../redux/balance/balanceActions";
import Controls from "../../components/Controls/Controls";
import TransactionHistory from "../../components/TransactionHistory/TransactionHistory";

const WithdrawPage = ({ list, addWithdraw, changeItem, deleteItem }) => {
  return (
    <section className={styles.incomeSection}>
      <div className={styles.container}>
        <div>
          <h2>Общая сумма</h2>
        </div>

        <Controls type="withdraw" add={addWithdraw} />

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
  list: balanceSelectors.getWithdrawMoney(state)
});

const mapDispatchToProps = dispatch => ({
  addWithdraw: (typeNeed, amount) =>
    dispatch(addWithdrawMoneyAC(typeNeed, amount)),
  changeItem: (id, amount) => dispatch(editWithdrawMoneyAC(id, amount)),
  deleteItem: id => dispatch(removeWithdrawMoneyAC(id))
});

// export default WithdrawPage;
export default connect(mapStateToProps, mapDispatchToProps)(WithdrawPage);
