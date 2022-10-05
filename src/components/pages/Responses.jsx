import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getOneFormById } from "../../services/form";
import { getResponses } from "../../services/responses";
// import { CSVLink } from "react-csv";
import { DownloadTableExcel } from "react-export-table-to-excel";
import "../style/Responses.css";
import SideNavigation from "../subComponents/SideNavigation";
import Header from "../subComponents/Header";
import SecBtn from "../subComponents/SecBtn";


const Responses = ({ user,setUser }) => {
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
    return response.inputValues;
  });

  const tableRef = useRef(null);
  return mappedResponses[0] ? (
    <div className="main">
       <Header/>
      <div className="responsesBody">
      <SideNavigation user={user} setUser={setUser}/>
      <div className="tableContainer">
        <table ref={tableRef}>
          <thead>
            <tr>
              {Object.keys(mappedResponses[0]).map((field, i) => (
                <th key={i}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mappedResponses.map((response, i) => {
              return (
                <tr key={i}>
                  {Object.entries(response).map(([key, value]) => {
                    if (key === "timestamp") {
                      return (
                        <td key={key + value}>
                          {new Date(value).toLocaleDateString()}
                        </td>
                      );
                    }
                    return <td key={key + value}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <DownloadTableExcel
      filename={`${form.title}`}
        sheet="Responses"
        currentTableRef={tableRef.current}
      >
        <SecBtn btnText={"Export excel"}/> 
      </DownloadTableExcel>
      </div>
      </div>
     
      {/* <CSVLink data={mappedResponses} filename = {`${form.title}.xlsx`} className= "exportButton">Export </CSVLink> */}
    </div>
  ) : (
    <div>No responses yet for this form</div>
  );
};

export default Responses;
