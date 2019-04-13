import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Header } from "semantic-ui-react";
import LabelledInput from "../forms/LabelledInput";

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

      console.log(res);
    } catch (e) {}

    setIsLoading(false);
  }

  return (
    <div>
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
        <Button primary type="submit" loading={isLoading}>
          Add Expense
        </Button>
      </Form>
    </div>
  );
};

export default CreateExpense;
