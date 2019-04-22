import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

function ExpenseListItem({
  id,
  dispatch,
  description,
  amount,
  createdAt,
  note
}) {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        ${amount}-{createdAt}
      </p>
      <p>Note:{note}</p>
      <button
        type="text"
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
}
export default connect()(ExpenseListItem);
