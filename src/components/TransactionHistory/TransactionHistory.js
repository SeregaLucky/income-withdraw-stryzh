import React from "react";
import styles from "./TransactionHistory.module.css";
import TbodyList from "../TbodyList/TbodyList";

const TransactionHistory = ({ list, type }) => (
  <table className={styles.historyTable}>
    <thead className={styles.theadHeader}>
      <tr>
        <th>Amount</th>
        <th>Info</th>
        <th>Date</th>
        <th>Make change or delete</th>
      </tr>
    </thead>

    <TbodyList list={list} type={type} />
  </table>
);

export default TransactionHistory;
