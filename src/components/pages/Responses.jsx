import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";
import "../style/Responses.css"

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
            return (
              <tr key={i}>
                {response.inputValues.map((value, j) => {
                  return <td key={j}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Responses;
