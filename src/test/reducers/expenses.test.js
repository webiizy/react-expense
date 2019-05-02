import reducerExpense from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should test default reducer expense", () => {
  const state = reducerExpense(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = reducerExpense(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: 4
  };
  const state = reducerExpense(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: 4,
    description: "Laptop",
    note: "",
    amount: 1200,
    createdAt: 321234
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = reducerExpense(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const amount = 99999;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    update: {
      amount
    }
  };
  const state = reducerExpense(expenses, action);
  expect(state[1].amount).toBe(amount);
});
