import React from "react";
import PropTypes from "prop-types";
import { VictoryPie } from "victory";

const ExpenseChart = props => {
  const { expenses } = props;

  return (
    <div style={{ height: "40vh" }}>
      <VictoryPie
        x="description"
        y="amount"
        data={expenses}
        colorScale={["#DB0010", "#E16A00", "#027E89", "#19BA00"]}
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseEnter: () => [
                {
                  target: "data",
                  mutation: props => ({
                    style: {
                      ...props.style,
                      stroke: "black",
                      strokeWidth: 2
                    }
                  })
                }
              ],
              onMouseLeave: () => [
                {
                  target: "data",
                  mutation: props => ({
                    style: {
                      ...props.style,
                      strokeWidth: 0
                    }
                  })
                }
              ]
            }
          }
        ]}
      />
    </div>
  );
};

ExpenseChart.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ExpenseChart;
