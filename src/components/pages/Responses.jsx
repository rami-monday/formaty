import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import "../style/Responses.css";

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

  const mappedResponses = responses.map((response) => {
    if (response.inputValues.length) {
      const newInputValues = {};
      response.inputValues.forEach((value, i) => {
        newInputValues[form.inputFields[i].label] = value;
      });
      return newInputValues;
    }
    return response.inputValues;
  });
  const _export = React.useRef(null);

  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  return (
    <div>
      <ExcelExport data={mappedResponses} ref={_export}>
        <button onClick={excelExport}>export</button>
        <table>
          <thead>
            <tr>
              {form.inputFields.map((field, i) => (
                <th key={i}>{field.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mappedResponses.map((response, i) => {
              return (
                <tr key={i}>
                  {Object.entries(response).map(([key, value]) => {
                    return <td key={key + value}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </ExcelExport>
    </div>
  );
};

export default Responses;
