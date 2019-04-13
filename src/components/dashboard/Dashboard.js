import React from "react";
import Expenses from "../expenses/Expenses";
import CreateExpense from "../expenses/CreateExpense";

const Dashboard = () => {
  return (
    <>
      <CreateExpense />
      <Expenses />
    </>
  );
};

export default Dashboard;
