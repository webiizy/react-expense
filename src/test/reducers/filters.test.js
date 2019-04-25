import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by amount", () => {
  const state = filtersReducer(undefined, {
    type: "SET_SORTBY_FILTER",
    sortBy: "amount"
  });

  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount"
  };
  const state = filtersReducer(currentState, {
    type: "SET_SORTBY_FILTER",
    sortBy: "date"
  });

  expect(state.sortBy).toBe("date");
});

test("should set text filters", () => {
  const currentState = {
    text: "Rent",
    sortBy: "amount"
  };
  const state = filtersReducer(currentState, {
    type: "SET_TEXT_FILTER",
    text: "GAS"
  });

  expect(state.text).toBe("GAS");
});

test("should set start date filters", () => {
  const currentState = {
    text: "Rent",
    sortBy: "amount",
    startDate: moment().startOf("minute")
  };
  const state = filtersReducer(currentState, {
    type: "SET_STARTDATE_FILTER",
    startDate: moment()
      .subtract(1, "days")
      .startOf("minute")
  });

  expect(state.startDate).toEqual(
    moment()
      .subtract(1, "days")
      .startOf("minute")
  );
});

test("should set end date filters", () => {
  const currentState = {
    text: "Rent",
    sortBy: "amount",
    endtDate: moment().startOf("minute")
  };
  const state = filtersReducer(currentState, {
    type: "SET_STARTDATE_FILTER",
    startDate: moment()
      .subtract(1, "days")
      .endOf("minute")
  });

  expect(state.startDate).toEqual(
    moment()
      .subtract(1, "days")
      .endOf("minute")
  );
});
