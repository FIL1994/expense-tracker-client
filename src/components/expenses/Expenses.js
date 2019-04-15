import React from "react";
import { useExpenses } from "../../hooks/data";
import { Segment, Header, Card } from "semantic-ui-react";

const Expenses = () => {
  const expenses = useExpenses();

  return (
    <Segment>
      <Header>Expenses</Header>
      <Card.Group>
        {expenses.map(expense => (
          <Card key={expense.id}>
            <Card.Content>
              <Card.Header>{expense.description}</Card.Header>
              <Card.Description>
                {Intl.NumberFormat("en-CA", {
                  style: "currency",
                  currency: "CAD"
                }).format(expense.amount)}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};

export default Expenses;
