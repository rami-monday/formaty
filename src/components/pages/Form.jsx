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
  const [values, setValues] = useState({});
  const [Sumbit,setSumbit] = useState(false)
  const getFormFromDb = async () => {
    const dbForm = await getOneFormById(formId);
    setForm(dbForm);
    const updatedValues = [...values];
    dbForm.inputFields.forEach((input, i) => (updatedValues[input.label] = ""));
  };

  const handleInput = (index, value) => {
    const updatedValues = { ...values };
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  useEffect(() => {
    getFormFromDb();
  });

  const handleClick = async function () {
    await addResponse({
      formId: formId,
      inputValues: values,
    });
    setSumbit(true)
  };
  if (Sumbit) {
    return(
      <div>Thank you for sumbitting to us</div>
    )
  }else{
  return (
    <div className="formBuilderFillResponses">
      <h1> {form.title}</h1>
      {form?.inputFields?.map((input, i) => (
        <InputField
          key={i}
          inputField={input}
          value={values[i]}
          onChange={({ target }) => handleInput(input.label, target.value)}
        />
      ))}
      <br />
      <PrimaryBtn btnText={"Submit"} btnHandle={handleClick}></PrimaryBtn><br />
    </div>
  );}
};

export default Form;
