import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";

const Responses = ({ user }) => {
  const { formId } = useParams();
  const [Form, setForm] = useState({});
  const [Responses, setResponses] = useState([]);

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
  }, []);
  const testForm = {
    _id: "62f2c0f3894dff4fbb8a2bd8",
    title: "testForm1",
    ownerId: "62eccc6362c4bac323c143b2 ",
    inputFields: [
      {
        type: "text",
        label: "First Name",
      },
      {
        type: "text",
        label: "Last Name",
      },
      {
        type: "number",
        label: "Age",
      },
    ],
    status: "active",
    dateCreated: 1660076275879,
    deadline: 31,
    __v: 0,
  };

  const testResponses = [
    { formId: "62f2c0f3894dff4fbb8a2bd8", inputValues: ["Walter", "White","52"] },
    { formId: "62f2c0f3894dff4fbb8a2bd8", inputValues: ["Joe", "Goldberg","30"] },
    { formId: "62f2c0f3894dff4fbb8a2bd8", inputValues: ["Eliot", "Alderson","28"] },
  ];
  //console.log(testResponses[0].inputValues[0])
  return (
    <div>
      {/* <div>{testForm.inputFields[0].type}</div> */}
      {testForm.inputFields.map((field, i) => (
        <div key={i}>
          The question : {field.label} <br /> the answers are:
          <div>
            {testResponses.map((response, j) => {
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
