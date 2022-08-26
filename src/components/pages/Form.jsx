import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import InputField from "../inputfields/InputField";
import "../style/inputFields/FormBuilder.css";
import PrimaryBtn from "../subComponents/PrimaryBtn"


import { addResponse } from "../../services/responses";
const Form = () => {
  const { formId } = useParams();
  const [form, setForm] = useState({});
  const [values, setValues] = useState([]);

  const getFormFromDb = async () => {
    const dbForm = await getOneFormById(formId);
    setForm(dbForm);
    const updatedValues = [...values];
    dbForm.inputFields.forEach((input, i) => (updatedValues[i] = ""));
  };

  const handleInput = (index, value) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
    console.log(values);
  };

  useEffect(() => {
    getFormFromDb();
  }, []);
  const handleClick = async function () {
    const newResponse = await addResponse({
      formId: formId,
      inputValues: values,
    });
    console.log(values);
  };
  return (
    <div className="formBuilder">
      <h1> {form.title}</h1>
      {form?.inputFields?.map((input, i) => (
        <InputField
          key={i}
          inputField={input}
          value={values[i]}
          onChange={({ target }) => handleInput(i, target.value)}
        />
      ))}
      <br />
      <PrimaryBtn btnText={"Submit"} btnHandle={handleClick}></PrimaryBtn><br />
    </div>
  );
};

export default Form;
