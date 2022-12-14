import React, { useState } from "react";
import InputFieldEditor from "../inputfields/InputFieldEditor";
import { addForm } from "../../services/form";
import { useNavigate } from "react-router-dom";
import "../style/inputFields/FormBuilder.css";
import SideNavigation from "../subComponents/SideNavigation";
import Header from "../subComponents/Header";

const FormBuilder = ({ user ,setUser}) => {
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
    const newField = { type: "text", label: "label" };
    const updatedInputFields = [...inputFields, newField];
    setInputFields(updatedInputFields);
  };
  const handleNewFieldChange = (index, value) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index] = value;
    setInputFields(updatedInputFields);
  };

  const checkIfValid = () => {
    let isValid = true;
    inputFields.forEach((field) => {
      const fieldOccurnace = inputFields.filter(
        (checkedField) => checkedField.label === field.label
      );
      if (fieldOccurnace.length > 1) {
        isValid = false;
      }
    });
    return isValid;
  };

  const handleSubmit = async () => {
    if (!checkIfValid()) return alert("You can't have two input fields with the same label");

    try {
      const response = await addForm({
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
      <Header/>
      <div className="formBuilderbody">
        <SideNavigation user={user} setUser={setUser}/>
        <div className="container">
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
      </div>
    </div>
  );
};

export default FormBuilder;
