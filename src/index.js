import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import "./styles/styles.scss";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";

import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import moment from "moment";

const store = configureStore();
store.dispatch(
  addExpense({
    description: "water bill month 01",
    amount: 230,
    createdAt: 1000
  })
);
store.dispatch(
  addExpense({
    description: "water bill month 02",
    amount: 500
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 450
  })
);
store.dispatch(setTextFilter(""));

//const state = store.getState();
//const getexp = getVisibleExpenses(state.expenses, state.filters);

//console.log(getexp);
//console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
