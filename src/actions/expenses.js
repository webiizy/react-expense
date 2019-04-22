import uuid from "uuid";
import moment from "moment";
//Action expense
export const addExpense = ({
  description = "",
  note = "",
  amount = undefined,
  createdAt = moment().valueOf()
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});
