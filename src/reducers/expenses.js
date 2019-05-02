///////////////reducer expense///////////

const defaultExpense = [];

export default function reducerExpense(state = defaultExpense, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      //console.log(action);
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.update };
        } else {
          return expense;
        }
      });
    case "REMOVE_EXPENSE":
      return state.filter(expense => {
        return expense.id !== action.id;
      });
    default:
      return state;
  }
}
