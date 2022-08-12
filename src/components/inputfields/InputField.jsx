import React from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import LongTextInput from "./LongTextInput";
import NumberInput from "./NumberInput";
import "../style/inputFields/InputFieldEditor.css"

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
    <div className="inputFieldContainer">
      <h2 className="label">{label}</h2>
      <Component onChange={onChange} value={value} placeHolder="Your answer" />
    </div>
  );
};

export default InputField;
