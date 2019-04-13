import * as React from "react";
import { InputProps } from "semantic-ui-react/src/elements/Input/Input";

interface Props extends InputProps {
  [key: string]: any;
  id: string;
  /** Label to display above input */
  label: React.ReactNode;
}

declare const LabelledInput: React.FunctionComponent<Props>;

export default LabelledInput;
