import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

function AddExpensePage(props) {
  const handleSubmit = expense => {
    props.dispatch(addExpense(expense));
    props.history.push("/");
  };
  return (
    <div>
      <h2>Add Expense Page</h2>
      {/* code cũ  */}
      {/* <ExpenseForm push={link => props.history.push(link)} /> */}

      {/* Đưa connect redũx về  AddExpense */}
      <ExpenseForm submit={handleSubmit} />
    </div>
  );
}

export default connect()(AddExpensePage);
