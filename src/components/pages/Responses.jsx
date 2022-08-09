import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";

const Responses = ({ user }) => {
  const { formId } = useParams();
  const [Form,setForm] = useState({})

  const getTheForm = async function (formId) {
    const form = await getOneFormById(formId);
    setForm(form)
  }
  useEffect(()=>{
    getTheForm(formId)
  })
 // const responses = getResponses(user._id, formId);
  return (
    <div>
      <div>{Form.title}</div>
      <div>yaz</div>
    </div>
  );
};

export default Responses;
