import React from "react";
import axios from "axios";
import { Input, Button, Form, Header } from "semantic-ui-react";
import LabelledInput from "../forms/LabelledInput";

const CreateExpense = props => {
  return (
    <div>
      <Header>Add Expense</Header>
      <Form>
        <LabelledInput label="Description" id="description" />
        <LabelledInput label="Amount" id="amount" />
        <Button primary type="submit">
          Add Expense
        </Button>
      </Form>
    </div>
  );
};

export default CreateExpense;
