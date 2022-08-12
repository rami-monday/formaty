import React, { useState } from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import LongTextInput from "./LongTextInput";
import NumberInput from "./NumberInput";
import "../style/inputFields/InputFieldEditor.css"

const inputFieldsTypes = ["text", "longText", "number", "date"];

const inputTypeComponent = {
  date: DateInput,
  text: TextInput,
  longText: LongTextInput,
  number: NumberInput,
};

const InputFieldEditor = ({ inputField, onChange, index }) => {
  const [newField, setNewField] = useState({ ...inputField });

  const handleChange = (property, value) => {
    const updateNewField = { ...newField };
    updateNewField[property] = value;
    onChange(index, updateNewField);
    setNewField(updateNewField);
  };

  const Component = inputTypeComponent[newField.type] || <div />;
  return (
    <div className="inputFieldContainer">
      <div className="fieldConfig">
        <input
        className="labelEditor"
          value={newField.label}
          onChange={({ target }) => handleChange("label", target.value)}
        />
        <select
        className="typeOptions"
          value={newField.type}
          onChange={({ target }) => handleChange("type", target.value)}
        >
          {inputFieldsTypes.map((fieldType, i) => (
            <option key={i} value={fieldType}>
              {fieldType}
            </option>
          ))}
        </select>
      </div>
      <Component placeholder="Your answer"/>
    </div>
  );
};

export default InputFieldEditor;
