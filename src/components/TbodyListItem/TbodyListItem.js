import React, { Component } from "react";
import { connect } from "react-redux";
// import styles from "./TbodyListItem.module.css";
import balanceSelectors from "../../redux/balance/balanceSelectors";
import {
  editIncomeMoneyAC,
  removeIncomeMoneyAC,
  editWithdrawMoneyAC,
  removeWithdrawMoneyAC
} from "../../redux/balance/balanceActions";

// type

class TbodyListItem extends Component {
  state = { num: "" };

  deleteItem = () => {
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  };

  handleChange = e => this.setState({ num: e.target.value });

  setChange = () => {
    const { changeItem } = this.props;
    let { num } = this.state;
    num = Number(num);
    // console.log(num);
    changeItem(num);
  };

  render() {
    const { item } = this.props;
    console.log("Item");

    return (
      <tr
      // className={
      //   item.type === "deposit" ? styles.itemIncome : styles.itemExpenses
      // }
      >
        {/* <td>{item.type}</td> */}
        <td>{item.amount}$</td>
        <td>
          {item.date}
          <button type="button" onClick={this.deleteItem}>
            Delete
          </button>

          <input type="number" onChange={this.handleChange} />
          <button onClick={this.setChange}>change</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state, { id, type }) => {
  if (type === "income") {
    return { item: balanceSelectors.getByIdIncomeMoney(state, id) };
  }
  if (type === "withdraw") {
    return { item: balanceSelectors.getByIdWithdrawMoney(state, id) };
  }
};

const mapDispatchToProps = (dispatch, { id, type }) => {
  if (type === "income") {
    return {
      changeItem: amount => dispatch(editIncomeMoneyAC(id, amount)),
      deleteItem: () => dispatch(removeIncomeMoneyAC(id))
    };
  }
  if (type === "withdraw") {
    return {
      changeItem: amount => dispatch(editWithdrawMoneyAC(id, amount)),
      deleteItem: () => dispatch(removeWithdrawMoneyAC(id))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TbodyListItem);
