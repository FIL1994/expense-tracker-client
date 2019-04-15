import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

const LabelledInput = props => {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.id}>{props.label}</label>
      <Input {...props} label={undefined} />
    </div>
  );
};

LabelledInput.defaultProps = {
  ...Input.defaultProps,
  fluid: true
};

LabelledInput.propTypes = {
  ...Input.propTypes,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired
};

export default LabelledInput;
