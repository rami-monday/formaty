import React from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import LongTextInput from "./LongTextInput";
import NumberInput from "./NumberInput";

const inputTypeComponent = {
  date: DateInput,
  text: TextInput,
  longText: LongTextInput,
  number: NumberInput,
};

const InputField = ({ inputField, onChange, value }) => {
  const { type, label } = inputField;
  const Component = inputTypeComponent[type] || <div />;
  return (
    <div>
      <h2>{label}</h2>
      <Component onChange={onChange} value={value} />
    </div>
  );
};

export default InputField;
