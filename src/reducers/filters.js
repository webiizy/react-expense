import moment from "moment";
////////reducer filter
const defaultFilter = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};
export default function reducerFilter(state = defaultFilter, action) {
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
}
