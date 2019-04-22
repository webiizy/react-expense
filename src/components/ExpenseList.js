import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseFilter from "./ExpenseListFilter";
import { getVisibleExpenses } from "../selectors/getVisibleExpenses";

function ExpenseList(props) {
  console.log(props);
  //props.addExp({ description: "GAS bill t3" });
  return (
    <div>
      <h1>Expense List</h1>
      Search: <ExpenseFilter />
      {props.expenses.map(item => (
        <ExpenseListItem key={item.id} {...item} />
      ))}
      <button
        onClick={() => {
          // props.addExp({
          //   description: `water bill month ${Math.floor(Math.random() * 12)} `,
          //   amount: Math.floor(Math.random() * 300),
          //   createdAt: Math.floor(Math.random() * 500)
          // });
          props.dispatch(
            addExpense({
              description: `water bill month ${Math.floor(
                Math.random() * 12
              )} `,
              amount: Math.floor(Math.random() * 300),
              createdAt: Math.floor(Math.random() * 500)
            })
          );
        }}
      >
        add
      </button>
    </div>
  );
}
const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
  filters: state.filters
});

// const mapDispatchToProps = dispatch => ({
//   addExp: data => dispatch(addExpense(data))
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ExpenseList);

// export default connect(state => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters
//   };
// })(ExpenseList);
