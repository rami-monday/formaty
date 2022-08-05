import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import InputField from "../inputfields/InputField";

const Form = () => {
  const { formId } = useParams();
  const [form, setForm] = useState({});

  const getFormFromDb = async () => {
    const dbForm = await getOneFormById(formId);
    setForm(dbForm);
  };

  useEffect(() => {
    getFormFromDb();
    console.log(form);
  }, [formId]);

  return (
    <div>
      Form {form.title}
      {form?.inputFields.map((input,i)=><InputField key={i} inputField={input}/>)}
    </div>
  );
};

export default Form;
