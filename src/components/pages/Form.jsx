import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import InputField from "../inputfields/InputField";

const Form = () => {
  const { formId } = useParams();
  const [form, setForm] = useState({});
  const [values, setValues] = useState([]);

  const getFormFromDb = async () => {
    const dbForm = await getOneFormById(formId);
    setForm(dbForm);
  };

  const handleInput = (index, value) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  useEffect(() => {
    getFormFromDb();
    const updatedValues = [];
    form.inputFields.forEach((input, i) => (updatedValues[i] = ""));
    setValues(updatedValues);
  }, [formId]);

  return (
    <div>
      Form {form.title}
      {form?.inputFields.map((input, i) => (
        <InputField
          key={i}
          inputField={input}
          value={values[i]}
          onChange={({ target }) => handleInput(i, target.value)}
        />
      ))}
    </div>
  );
};

export default Form;
