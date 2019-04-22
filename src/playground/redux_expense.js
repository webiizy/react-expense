//console.log("redux expense");
import uuid from "uuid";
import { createStore, combineReducers } from "redux";

//Action expense
const addExpense = ({
  description = "",
  note = "",
  amount = undefined,
  createdAt = undefined
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});
//////////////ACTION FILTER///////////
const setTextFliter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const setSortByFilter = (sortBy = "date") => ({
  type: "SET_SORTBY_FILTER",
  sortBy
});

const setStartDate = startDate => ({
  type: "SET_STARTDATE_FILTER",
  startDate
});

const setEndDate = endDate => ({
  type: "SET_ENDDATE_FILTER",
  endDate
});

///////////////reducer expense///////////

const defaultExpense = [];

const reducerExpense = (state = defaultExpense, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      console.log(action);
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
};

////////reducer filter
const defaultFilter = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const reducerFilter = (state = defaultFilter, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_SORTBY_FILTER":
      return { ...state, sortBy: action.sortBy };
    case "SET_STARTDATE_FILTER":
      return { ...state, startDate: action.startDate };
    case "SET_ENDDATE_FILTER":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

/////////////////////////////
const store = createStore(
  combineReducers({
    expenses: reducerExpense,
    filters: reducerFilter
  })
);

// store.dispatch(addExpense({ description: "GAS bill", amount: 300 }));
// store.dispatch(addExpense({ description: "Electric bill", amount: 600 }));

// //store.dispatch(removeExpense({ id: store.getState()[0].id }));

// store.dispatch(editExpense(store.getState()[0].id, { amount: 350 }));

/////////get visible

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(exp => {
      const textMatch = exp.description.toLowerCase().includes(text);
      const startDateMatch =
        typeof exp.startDate !== "number" || exp.startDate > startDate;
      const endDateMatch =
        typeof exp.endDate !== "number" || exp.endDate < endDate;

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return a.amout - b.amount;
      }
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? -1 : 1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const getvisibleExp = getVisibleExpense(state.expenses, state.filters);
  console.log(getvisibleExp);
});

////combineReducer example///////
store.dispatch(
  addExpense({ description: "GAS bill", amount: 300, createdAt: 5300 })
);
store.dispatch(
  addExpense({ description: "Electric bill", amount: 600, createdAt: 4400 })
);
store.dispatch(setTextFliter("bill"));
//store.dispatch(setSortByFilter("date"));
store.dispatch(setSortByFilter("amount"));
//store.dispatch(setStartDate(100));
//store.dispatch(setEndDate(3000));
