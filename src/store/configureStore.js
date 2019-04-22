import { createStore, combineReducers } from "redux";
import reducerExpense from "../reducers/expenses";
import reducerFilter from "../reducers/filters";

export default function configureStore() {
  const store = createStore(
    combineReducers({
      expenses: reducerExpense,
      filters: reducerFilter
    }),
    // redux tool debug,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
