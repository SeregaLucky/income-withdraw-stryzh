import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./CategoryListItem.module.css";
import {
  editIncomeCategoryAC,
  editWithdrawCategoryAC,
  removeIncomeCategoryAC,
  removeWithdrawCategoryAC
} from "../../redux/categories/categoriesActions";

class CategoryListItem extends Component {
  state = { editText: "" };

  handleChange = e => this.setState({ editText: e.target.value });

  editItem = () => {
    const { editI } = this.props;
    const { editText } = this.state;
    editI(editText);
  };

  render() {
    const { option, deleteI } = this.props;
    const { editText } = this.state;

    return (
      <li className={styles.item}>
        <span>{option}</span>
        <button type="button" onClick={deleteI}>
          Delete
        </button>

        <input
          type="text"
          value={editText}
          onChange={this.handleChange}
          name="editText"
          placeholder="Edit..."
        />
        <button type="button" onClick={this.editItem}>
          Edit
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, { type, option }) => {
  if (type === "income") {
    return {
      deleteI: () => dispatch(removeIncomeCategoryAC(option)),
      editI: optionNew => dispatch(editIncomeCategoryAC(option, optionNew))
    };
  }
  if (type === "withdraw") {
    return {
      deleteI: () => dispatch(removeWithdrawCategoryAC(option)),
      editI: optionNew => dispatch(editWithdrawCategoryAC(option, optionNew))
    };
  }
};

export default connect(null, mapDispatchToProps)(CategoryListItem);
