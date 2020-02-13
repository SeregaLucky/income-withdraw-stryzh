import React, { Component } from "react";
// import { connect } from "react-redux";
// import balanceSelectors from "../../redux/balance/balanceSelectors";
// import {
//   editIncomeMoneyAC,
//   removeIncomeMoneyAC
// } from "../../redux/balance/balanceActions";
// import styles from "./TbodyListItem.module.css";

class TbodyListItem extends Component {
  state = {
    num: ""
  };

  deleteItem = () => {
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  };

  handleChange = e => this.setState({ num: e.target.value });

  setChange = () => {
    const { item, changeItem } = this.props;
    const { num } = this.state;
    changeItem(item.id, num);
  };

  render() {
    const { item } = this.props;

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

// const mapStateToProps = (state, { id }) => ({
//   item: balanceSelectors.getByIdIncomeMoney(state, id)
// });

// const mapDispatchToProps = (dispatch, { id }) => ({
//   changeItem: amount => dispatch(editIncomeMoneyAC(id, amount)),
//   deleteItem: () => dispatch(removeIncomeMoneyAC(id))
// });

export default TbodyListItem;
// export default connect(mapStateToProps, mapDispatchToProps)(TbodyListItem);
