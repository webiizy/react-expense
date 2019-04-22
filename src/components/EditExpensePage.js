import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import { getExpense } from "../selectors/getVisibleExpenses";
function EditExpensePage(props) {
  //console.log(props);
  const expense = getExpense(props.expenses, props.match.params.id);
  //console.log(expense[0]);
  const handleSubmit = expense => {
    props.dispatch(editExpense(props.match.params.id, expense));
    props.history.push("/");
  };

  return (
    <div>
      <h1> Eddit Expense Page</h1>

      <div>params: {props.match.params.id}</div>
      <ExpenseForm submit={handleSubmit} expense={expense} />
    </div>
  );
}
const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(EditExpensePage);
