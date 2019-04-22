import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// const now = moment();
// console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends Component {
  state = this.props.expense
    ? this.props.expense
    : {
        description: "",
        note: "",
        amount: "",
        createdAt: moment().valueOf(),
        focused: false,
        error: ""
      };

  onHandleSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please provide descript and amount" });
    } else {
      this.setState({ error: "" });
      // this.props.dispatch(
      //   addExpense({
      //     description: this.state.description,
      //     amount: parseFloat(this.state.amount, 10),
      //     createdAt: this.state.createdAt.valueOf(),
      //     note: this.state.note
      //   })
      // );
      // this.props.push("/");
      //submit về cho parent component
      this.props.submit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    //console.log(this.props.expenses);
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={e => {
              const description = e.target.value;
              this.setState(() => ({ description }));
            }}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={e => {
              const amount = e.target.value;
              if (amount.match(/^\d*(\.\d{0,2})?$/)) {
                this.setState(() => ({ amount }));
              }
            }}
          />
          <SingleDatePicker
            date={moment(this.state.createdAt)} // momentPropTypes.momentObj or null
            onDateChange={createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
          />

          <textarea
            placeholder="Add a note for your expense (Option) "
            value={this.state.note}
            onChange={e => {
              const note = e.target.value;
              this.setState(() => ({ note }));
            }}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
//export default connect()(ExpenseForm);
// export default connect(state => ({
//   expenses: state.expenses
// }))(ExpenseForm);
