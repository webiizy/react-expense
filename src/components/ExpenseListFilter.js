import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  setSortByFilter,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";

class ExpenseListFilter extends React.Component {
  state = {
    focusedInput: undefined
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            this.props.dispatch(setSortByFilter(e.target.value));
          }}
        >
          <option value="amount">Amount</option>
          <option value="date"> Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            this.props.dispatch(setStartDate(startDate));
            this.props.dispatch(setEndDate(endDate));
          }} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  filters: state.filters
});
export default connect(mapStateToProps)(ExpenseListFilter);
