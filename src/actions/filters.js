//////////////ACTION FILTER///////////
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const setSortByFilter = (sortBy = "date") => ({
  type: "SET_SORTBY_FILTER",
  sortBy
});

export const setStartDate = startDate => ({
  type: "SET_STARTDATE_FILTER",
  startDate
});

export const setEndDate = endDate => ({
  type: "SET_ENDDATE_FILTER",
  endDate
});
