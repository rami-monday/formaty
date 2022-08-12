import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";

const Responses = ({ user }) => {
  const { formId } = useParams();
  const [form, setForm] = useState({inputFields:[]});
  const [responses, setResponses] = useState([]);
  const getFromFromDB = async function (formId) {
    const form = await getOneFormById(formId);
    setForm(form);
  };
  const getResponsesFromDB = async function (userId, formId) {
    const responses = await getResponses(userId, formId);

    setResponses(responses);
  };

  useEffect(() => {
    getFromFromDB(formId);
    getResponsesFromDB(user._id, formId);
  }, [formId, user._id]);

  return (
    <div>
      {form.inputFields.map((field, i) => (
        <div key={i}>
          The question : {field.label} <br /> the answers are:
          <div>
            {responses.map((response, j) => {
              return (
                <div key={j}>
                  {j + 1}.{response.inputValues[i]}
                </div>
              );
            })}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Responses;
