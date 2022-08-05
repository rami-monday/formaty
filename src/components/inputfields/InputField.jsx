import React from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import LongTextInput from "./LongTextInput";
import NumberInput from "./NumberInput";

const inputTypeComponenet = {
  date: DateInput,
  text: TextInput,
  longText: LongTextInput,
  number: NumberInput,
};

const InputField = ({ inputField }) => {
  const { type, label } = inputField;
  const Component = inputTypeComponenet[type];
  return (
    <div>
      <h2>{label}</h2>
      <Component />
    </div>
  );
};

export default InputField;
