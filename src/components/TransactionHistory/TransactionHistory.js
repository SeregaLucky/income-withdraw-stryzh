import React from "react";
import styles from "./TransactionHistory.module.css";
import TbodyList from "../TbodyList/TbodyList";

const TransactionHistory = ({ list, type }) => {
  return (
    <table className={styles.historyTable}>
      <thead className={styles.theadHeader}>
        <tr>
          {/* <th>Transaction</th> */}
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>

      <TbodyList list={list} type={type} />
    </table>
  );
};

export default TransactionHistory;
