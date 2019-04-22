import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from "uuid";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "test change" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    update: { note: "test change" }
  });
});

test("should setup add new expense action object", () => {
  const expenseData = {
    description: "Rent",
    amount: 1000,
    createdAt: 20000,
    note: "This is last month rent fee"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default object", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      note: "",
      createdAt: expect.any(Number)
    }
  });
});
