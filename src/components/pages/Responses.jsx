import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";

const Responses = ({ user }) => {
  const { formId } = useParams();
  const [form, setForm] = useState({ inputFields: [] });
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
  console.log(responses);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {form.inputFields.map((field, i) => (
              <th key={i}>{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {responses.map((response, i) => {
            response.inputValues.map((input) => {
              return <td key={input + i}>{input}</td>;
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Responses;
