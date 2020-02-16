import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Categories.module.css";
import categoriesSelectors from "../../redux/categories/categoriesSelectors";
import {
  addIncomeCategoryAC,
  addWithdrawCategoryAC
} from "../../redux/categories/categoriesActions";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

class Categories extends Component {
  state = { newC: "" };

  handleChange = e => this.setState({ newC: e.target.value });

  addNewItem = () => {
    const { addItem } = this.props;
    const { newC } = this.state;
    addItem(newC);
  };

  render() {
    const { options, type } = this.props;
    const { newC } = this.state;

    return (
      <>
        <h3 className={styles.title}>Categories</h3>

        <input
          type="text"
          name="newC"
          value={newC}
          onChange={this.handleChange}
          placeholder="New categories..."
        />
        <button type="button" onClick={this.addNewItem}>
          Add
        </button>

        <ul className={styles.list}>
          {options.map(option => (
            <CategoryListItem key={option} option={option} type={type} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state, { type }) => {
  if (type === "income") {
    return {
      options: categoriesSelectors.getIncomeCategory(state)
    };
  }
  if (type === "withdraw") {
    return {
      options: categoriesSelectors.getWithdrawCategory(state)
    };
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === "income") {
    return {
      addItem: option => dispatch(addIncomeCategoryAC(option))
    };
  }
  if (type === "withdraw") {
    return {
      addItem: option => dispatch(addWithdrawCategoryAC(option))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
