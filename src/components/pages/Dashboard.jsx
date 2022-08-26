import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../services/form";
import Copier from "../subComponents/Copier";
import { deletFormById } from "../../services/form";
import SignOut from "../subComponents/SignOut";
import Header from "../subComponents/Header"
import { FaTrash , FaClipboardList , FaPlus} from 'react-icons/fa';
import "../style/Dashboard.css"

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
    
      
    <div>
        <SignOut/>
       
      <Header></Header>
      <div className="dashBoardHeader">
        <div className="dashBoardUserInfo">
          <p>UserName: {user?.email}</p>
        </div>
        <div onClick={() => navigate("/formBuilder")} className="dashBoardNavigation">
          <span><FaPlus></FaPlus></span>
        </div>
      </div>
      <div className="userForms">
        {forms?.map((form, i) => (
          <div className="userForm" key={i}>
              <h2>{form.title}</h2>
              <div className="userFormBtns">
                  <Copier formId={form._id} />
                   <button className="sideIcons" onClick={() => handleDeleteFormById(form._id)}>
                     <FaTrash></FaTrash>
                    </button>
                   <button className="sideIcons" onClick={() => navigate("/responses/" + form._id)}>
                    <FaClipboardList></FaClipboardList>
                    </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
