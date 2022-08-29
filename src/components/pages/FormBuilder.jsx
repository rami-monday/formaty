import React, { useState } from "react";
import InputFieldEditor from "../inputfields/InputFieldEditor";
import { addForm } from "../../services/form";
import { useNavigate } from "react-router-dom";
import "../style/inputFields/FormBuilder.css";

const FormBuilder = ({ user }) => {
  const [title, setTitle] = useState("form title");
  const [deadline, setDeadline] = useState("");
  const [inputFields, setInputFields] = useState([]);
  const navigate = useNavigate();
  const handleInput = ({ target }) => {
    setTitle(target.value);
  };
  const handleDateInput = ({ target }) => {
    setDeadline(target.value);
  };

  const addNewField = () => {
    if (inputFields[1]) {
      for (let i = 0; i < inputFields.length; i++) {
        for (let j = 0; j < inputFields.length; j++) {
          if (inputFields[i].label === inputFields[j].label && i !== j) {
            return alert("You can't have two input fields with the same label");
          }
        }
      }
    }
    const newField = { type: "text", label: "label" };
    const updatedInputFields = [...inputFields, newField];
    setInputFields(updatedInputFields);
  };
  const handleNewFieldChange = (index, value) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index] = value;
    setInputFields(updatedInputFields);
  };

  const handleSubmit = async () => {
    try {
      const response = await addForm({
        ownerId: user._id,
        inputFields,
        title,
        deadline: Date.parse(deadline),
      });
      navigate(`/form/${response._id}`);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="formBuilder">
      <div className="formHeaders">
        <input
          className="labelEditor"
          type="text"
          value={title}
          onChange={handleInput}
        />
        <input
          className="labelEditor"
          type="date"
          value={deadline}
          onChange={handleDateInput}
        />
      </div>
      {inputFields.map((input, i) => (
        <InputFieldEditor
          key={i}
          inputField={input}
          index={i}
          onChange={handleNewFieldChange}
        />
      ))}
      <button onClick={addNewField}>add new input</button>
      <button onClick={handleSubmit}>save</button>
    </div>
  );
};

export default FormBuilder;
