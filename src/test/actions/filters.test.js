import {
  setStartDate,
  setEndDate,
  setTextFilter,
  setSortByFilter
} from "../../actions/filters";

test("should generate set start date object", () => {
  const action = setStartDate(5000);
  expect(action).toEqual({
    type: "SET_STARTDATE_FILTER",
    startDate: 5000
  });
});

test("should generate set end date object", () => {
  const action = setEndDate(9000);
  expect(action).toEqual({
    type: "SET_ENDDATE_FILTER",
    endDate: 9000
  });
});

test("should generate set text filter object", () => {
  const text = "Rent room";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate set text filter object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate action object for sort by date", () => {
  const sortBy = "date";
  const action = setSortByFilter(sortBy);
  expect(action).toEqual({
    type: "SET_SORTBY_FILTER",
    sortBy
  });
});

test("should generate action object for sort by amount", () => {
  const sortBy = "amount";
  const action = setSortByFilter(sortBy);
  expect(action).toEqual({
    type: "SET_SORTBY_FILTER",
    sortBy
  });
});
