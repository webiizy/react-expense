import moment from "moment";

export function getVisibleExpenses(
  expenses,
  { text, sortBy, startDate, endDate }
) {
  // console.log(
  //   `sort by: ${sortBy} start date: ${startDate}, end date: ${endDate}`
  // );
  return expenses
    .filter(exp => {
      const textMatch = exp.description.toLowerCase().includes(text);
      const createdAtMoment = moment(exp.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      //typeof exp.startDate !== "number" || exp.startDate > startDate;

      //console.log(startDateMatch);

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount < b.amount ? -1 : 1;
      } else if (sortBy === "date") {
        return a.createdAt < b.createdAt ? -1 : 1;
      }
    });
}

export function getExpense(expenses, id) {
  //console.log(id);
  return expenses.find(ex => ex.id === id);
}
