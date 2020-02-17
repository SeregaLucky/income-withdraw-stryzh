import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import T from 'prop-types';
import styles from './Calendar.module.css';
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
    addFilter(date[0], date[1]);
  };

  onClickDeleteFilter = () => {
    const { delelteFilter } = this.props;
    delelteFilter();
  };

  render() {
    return (
      <div className={styles.calendarCont}>
        <h3>Filter by date</h3>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          selectRange
        />

        <div className={styles.buttonsCont}>
          <button
            type="button"
            onClick={this.onClickAddFilter}
            className={styles.button}
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

const mapDispatchToProps = dispatch => ({
  addFilter: (to, from) => dispatch(addFilterByDateAC(to, from)),
  delelteFilter: () => dispatch(deleteFilterByDateAC()),
});

export default connect(null, mapDispatchToProps)(CalendarMy);
