import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import shortid from 'shortid';
import styles from './Categories.module.css';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import {
  addIncomeCategoryAC,
  addWithdrawCategoryAC,
} from '../../redux/categories/categoriesActions';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

class Categories extends Component {
  static propTypes = {
    options: T.arrayOf(T.string).isRequired,
    addItem: T.func.isRequired,
  };

  state = { newCategory: '' };

  inputIds = {
    newCategoryInputId: shortid.generate(),
  };

  handleChange = e => this.setState({ newCategory: e.target.value });

  addNewItem = () => {
    const { addItem } = this.props;
    const { newCategory } = this.state;
    addItem(newCategory);
  };

  render() {
    const { options, type } = this.props;
    const { newCategory } = this.state;
    const { newCategoryInputId } = this.inputIds;

    return (
      <>
        <h3 className={styles.title}>Categories</h3>

        <label htmlFor={newCategoryInputId}>
          <span>New category</span>
          <input
            type="text"
            name="newCategory"
            value={newCategory}
            onChange={this.handleChange}
            placeholder="New categories..."
            id={newCategoryInputId}
          />
        </label>

        <button type="button" onClick={this.addNewItem}>
          Add
        </button>

        {options && (
          <ul className={styles.list}>
            {options.map(option => (
              <CategoryListItem key={option} option={option} type={type} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, { type }) => {
  if (type === 'income') {
    return {
      options: categoriesSelectors.getIncomeCategory(state),
    };
  }
  if (type === 'withdraw') {
    return {
      options: categoriesSelectors.getWithdrawCategory(state),
    };
  }
};

const mapDispatchToProps = (dispatch, { type }) => {
  if (type === 'income') {
    return {
      addItem: option => dispatch(addIncomeCategoryAC(option)),
    };
  }
  if (type === 'withdraw') {
    return {
      addItem: option => dispatch(addWithdrawCategoryAC(option)),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
