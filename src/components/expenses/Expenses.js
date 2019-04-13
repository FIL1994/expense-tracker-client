import React, { useState, useEffect } from "react";
import axios from "axios";

const Expenses = props => {
  useEffect(() => {
    const url = `${process.env.ROOT_URL}/api/expenses`;

    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    });
  }, []);

  return <div>Expenses</div>;
};

export default Expenses;
