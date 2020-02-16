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

const OPTION = {
  year: "numeric",
  day: "numeric",
  month: "2-digit"
};

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
    changeItem(num);
  };

  render() {
    const { item } = this.props;
    console.log("Item");

    return (
      <tr>
        <td>{item.amount}$</td>
        <td>{item.direction}</td>
        <td>{item.date.toLocaleString("en-US", OPTION)}</td>
        <td>
          <button type="button" onClick={this.deleteItem}>
            Delete
          </button>

          <input type="number" onChange={this.handleChange} />
          <button onClick={this.setChange}>Edit</button>
        </td>
      </tr>
    );
  }
}

// Иф использую чтобы компонента была универсальной и во избежание не нужных перерендоров
const mapStateToProps = (state, { id, type }) => {
  if (type === "income") {
    return { item: balanceSelectors.getByIdIncome(state, id) };
  }
  if (type === "withdraw") {
    return { item: balanceSelectors.getByIdWithdraw(state, id) };
  }
};

// Иф использую чтобы компонента была универсальной и во избежание не нужных перерендоров
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
