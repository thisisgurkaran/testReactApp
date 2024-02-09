import React, { ChangeEvent } from "react";

interface Props {
  updateText?: () => number;
  value?: number;
  text?: string;
  x?: number;
}
const Child: React.FC<Props> = ({ updateText, value, x }) => {
  console.log("render child");

  return <div>Child: {x}</div>;
};

export default React.memo(Child);
