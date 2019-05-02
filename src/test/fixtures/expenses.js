import moment from "moment";

export default [
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
