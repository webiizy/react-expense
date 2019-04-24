import moment from "moment";
import { getVisibleExpenses } from "../../selectors/getVisibleExpenses";

const expenses = [
  {
    id: 1,
    description: "Rent",
    amount: 1000,
    note: "",
    createdAt: 0
  },
  {
    id: 2,
    description: "Gum",
    amount: 100,
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Credit card",
    amount: 3000,
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

//should filters by end Date
test("should filter sort by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: moment(0).add(2, "days")
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});
//should sort by date
test("should filter sort by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
//should sort by amount
test("should filter sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
