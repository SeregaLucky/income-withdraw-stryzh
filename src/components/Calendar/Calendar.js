import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import {
  addFilterByDateAC,
  deleteFilterByDateAC
} from "../../redux/balance/balanceActions";

class CalendarMy extends Component {
  state = { date: new Date() };

  onChange = date => this.setState({ date });

  onClickAddFilter = () => {
    const { addFilter } = this.props;
    const { date } = this.state;
    // console.log(new Date() < this.state.date)
    addFilter(date[0], date[1]);
  };

  onClickDeleteFilter = () => {
    const { delelteFilter } = this.props;
    delelteFilter();
  };

  render() {
    console.log(new Date());
    console.log(this.state.date);
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          selectRange
        />

        <button type="button" onClick={this.onClickAddFilter}>
          Add
        </button>

        <button type="button" onClick={this.onClickDeleteFilter}>
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addFilter: (to, from) => dispatch(addFilterByDateAC(to, from)),
  delelteFilter: () => dispatch(deleteFilterByDateAC())
});

// export default CalendarMy;
export default connect(null, mapDispatchToProps)(CalendarMy);
