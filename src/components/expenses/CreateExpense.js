import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Header } from "semantic-ui-react";
import LabelledInput from "../forms/LabelledInput";
import "./create-expense.less";

const CreateExpense = props => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("0.00");
  const [isLoading, setIsLoading] = useState(false);

  async function createExpense() {
    setIsLoading(true);

    try {
      const url = `${process.env.ROOT_URL}/api/expenses`;

      const res = await axios.post(
        url,
        {
          expense: {
            description,
            amount: Number(amount)
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.token}`
          }
        }
      );
    } catch (e) {}

    setIsLoading(false);
  }

  return (
    <div className="create-expense">
      <Header>Add Expense</Header>
      <Form onSubmit={createExpense}>
        <LabelledInput
          label="Description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <LabelledInput
          label="Amount"
          id="amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <br />
        <div>
          <Button primary type="submit" loading={isLoading}>
            Add Expense
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateExpense;
