import moment from "moment";
import { getVisibleExpenses } from "../../selectors/getVisibleExpenses";
import expenses from "../fixtures/expenses";

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
