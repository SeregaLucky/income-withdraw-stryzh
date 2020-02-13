import React from "react";
import styles from "./TransactionHistory.module.css";
import TbodyList from "../TbodyList/TbodyList";

const TransactionHistory = ({ list, changeItem, deleteItem }) => {
  return (
    <table className={styles.historyTable}>
      <thead className={styles.theadHeader}>
        <tr>
          {/* <th>Transaction</th> */}
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>

      <TbodyList list={list} changeItem={changeItem} deleteItem={deleteItem} />
    </table>
  );
};

export default TransactionHistory;
