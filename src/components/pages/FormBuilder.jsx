import React, { useState } from "react";
import InputFieldEditor from "../inputfields/InputFieldEditor";
import { addForm } from "../../services/form";
import { useNavigate } from "react-router-dom";

const FormBuilder = ({ user }) => {
  const [title, setTitle] = useState("");
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
    <div>
      <h2>Form title</h2>
      <input type="text" value={title} onChange={handleInput} />
      <input type="date" value={deadline} onChange={handleDateInput} />
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
