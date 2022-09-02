// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { getOneFormById } from "../../services/form";
// import { getResponses } from "../../services/responses";
// // import { CSVLink } from "react-csv";
// import { DownloadTableExcel } from "react-export-table-to-excel";
// import "../style/Responses.css";

// const Responses = ({ user }) => {
//   const { formId } = useParams();
//   const [form, setForm] = useState({ inputFields: [] });
//   const [responses, setResponses] = useState([]);
//   const getFromFromDB = async function (formId) {
//     const form = await getOneFormById(formId);
//     setForm(form);
//   };
//   const getResponsesFromDB = async function (userId, formId) {
//     const responses = await getResponses(userId, formId);

//     setResponses(responses);
//   };

//   useEffect(() => {
//     getFromFromDB(formId);
//     getResponsesFromDB(user._id, formId);
//   }, [formId, user._id]);

//   const mappedResponses = responses.map((response) => {
//     if (response.inputValues.length) {
//       const newInputValues = {};
//       response.inputValues.forEach((value, i) => {
//         newInputValues[form.inputFields[i].label] = value;
//       });
//       return newInputValues;
//     }
//     return response.inputValues;
//   });
//   const tableRef = useRef(null);
//   return (
//     <div className="main">
//       <DownloadTableExcel
//       filename={`${form.title}`}
//         sheet="Responses"
//         currentTableRef={tableRef.current}
//       >
//         <button> Export excel </button>
//       </DownloadTableExcel>
//       <div className="tableContainer">
//         <table ref={tableRef}>
//           <thead>
//             <tr>
//               {form.inputFields.map((field, i) => (
//                 <th key={i}>{field.label}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {mappedResponses.map((response, i) => {
//               return (
//                 <tr key={i}>
//                   {Object.entries(response).map(([key, value]) => {
//                     return <td key={key + value}>{value}</td>;
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       {/* <CSVLink data={mappedResponses} filename = {`${form.title}.xlsx`} className= "exportButton">Export </CSVLink> */}
//     </div>
//   );
// };

// export default Responses;
