import { useState, useEffect } from "react";
import axios from "axios";

export function useExpenses() {
  const [expenses, setExpenses] = useState([]);

  async function getExpenses() {
    const url = `${process.env.ROOT_URL}/api/expenses`;

    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    });

    setExpenses(res.data.data);
  }

  useEffect(() => void getExpenses(), []);

  return expenses;
}
