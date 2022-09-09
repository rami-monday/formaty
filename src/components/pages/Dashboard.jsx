import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../services/form";
import Copier from "../subComponents/Copier";
import { deletFormById } from "../../services/form";
import Header from "../subComponents/Header";
import SideNavigation from "../subComponents/SideNavigation";
import { FaTrash, FaClipboardList, FaPlus } from "react-icons/fa";
import "../style/Dashboard.css";

const Dashboard = ({ user }) => {
  const [forms, setForms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const getFilteredForms = () => {
    const filteredForms = forms?.filter((form) =>
      form.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredForms || [];
  };

  const handleSearchBar = ({ target }) => {
    setSearchTerm(target.value);
  };

  const checkIfUser = function () {
    if (!user) {
      navigate("/");
    }
  };
  useEffect(() => {
    checkIfUser();
    getUserFormsFromDb();
  }, []);
  

  return (
    <div className="mainContainer">
      <Header />
      <div className="dashBoard">
        <div className="dashBoardBody">
          <SideNavigation user={user} />
          <div className="userForms">
            <input type="text" value={searchTerm} onChange={handleSearchBar} />
            <div className="dashBoardHeader">
              <div
                onClick={() => navigate("/formBuilder")}
                className="dashBoardNavigation"
              >
                <span>
                  <FaPlus />
                </span>
              </div>
            </div>
            {getFilteredForms()?.map((form, i) => (
              <div className="userForm" key={i}>
                <div
                  className="userFormTitle"
                  onClick={() => navigate("/responses/" + form._id)}
                >
                  <h2>{form.title}</h2>
                </div>
                <div className="userFormBtns">
              
                    <Copier formId={form._id} />
                    <button
                      className="sideIcons"
                      onClick={() => handleDeleteFormById(form._id)}
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="sideIcons"
                      onClick={() => navigate("/responses/" + form._id)}
                    >
                      <FaClipboardList />
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
