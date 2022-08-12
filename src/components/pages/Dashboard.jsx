import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../services/form";
import Copier from "../subComponents/Copier";
import { deletFormById } from "../../services/form";

const Dashboard = ({ user }) => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  const getUserFormsFromDb = async function () {
    try {
      if (!user) return;
      const userForms = await getUserForms(user._id);
      setForms(userForms);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  const handleDeleteFormById = async (formId) => {
    try {
      await deletFormById(formId);
      await getUserFormsFromDb();
    } catch (error) {}
  };

  const checkIfUser = function () {
    if (!user) {
      navigate("/");
    }
  };
  useEffect(() => {
    checkIfUser();
    getUserFormsFromDb();
  },[]);

  return (
    <div className="mainContainer">
      <div className="dashBoardHeader">
        <div className="dashBoardUserInfo">
          <p>UserName: {user?.email}</p>
          <p>ID: {user?._id}</p>
        </div>
        <div className="dashBoardNavigation">
          <button onClick={() => navigate("/formBuilder")}>Add New Form</button>
        </div>
      </div>
      <div className="userForms">
        {forms?.map((form, i) => (
          <div key={i}>
            <div className="userForm">
              <h2>{form.title}</h2>
              <h6>{form._id}</h6>
              <Copier formId={form._id} />
              <button onClick={() => handleDeleteFormById(form._id)}>
                delete Form
              </button>
              <button onClick={() => navigate("/responses" + form._id)}>
                View Responses
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
