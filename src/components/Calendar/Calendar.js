import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import T from 'prop-types';
import styles from './Calendar.module.css';
import balanceSelectors from '../../redux/balance/balanceSelectors';
import {
  addFilterByDateAC,
  deleteFilterByDateAC,
} from '../../redux/balance/balanceActions';

class CalendarMy extends Component {
  static propTypes = {
    addFilter: T.func.isRequired,
    delelteFilter: T.func.isRequired,
  };

  state = { date: new Date() };

  onChange = date => this.setState({ date });

  onClickAddFilter = () => {
    const { addFilter } = this.props;
    const { date } = this.state;

    // console.log(date);
    // console.log(typeof date);
    // console.log(Array.isArray(date));

    if (!Array.isArray(date)) return;

    addFilter(date[0], date[1]);
  };

  onClickDeleteFilter = () => {
    const { delelteFilter } = this.props;
    delelteFilter();
  };

  render() {
    const { filter } = this.props;

    return (
      <div className={styles.calendarCont}>
        <h3>Filter by date income and withdraw</h3>
        <Calendar
          // className={styles.myTest}
          // tileClassName={styles.activvve}
          onChange={this.onChange}
          value={this.state.date}
          selectRange
        />

        {!filter && <p>Click on a specific date or select a time period.</p>}

        <div className={styles.buttonsCont}>
          <button
            type="button"
            onClick={this.onClickAddFilter}
            className={filter ? styles.buttonActive : styles.button}
          >
            Apply filtering
          </button>

          <button
            type="button"
            onClick={this.onClickDeleteFilter}
            className={styles.button}
          >
            Remove filtering
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: balanceSelectors.getDateFilter(state),
});

const mapDispatchToProps = dispatch => ({
  addFilter: (to, from) => dispatch(addFilterByDateAC(to, from)),
  delelteFilter: () => dispatch(deleteFilterByDateAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMy);
