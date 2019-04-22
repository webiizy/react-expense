import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
      <NavLink to="/abc" activeClassName="is-active">
        Not found
      </NavLink>
    </header>
  );
}
