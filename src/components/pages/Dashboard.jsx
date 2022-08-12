import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../services/form";
import Copier from "../subComponents/Copier";
const Dashboard = ({ user }) => {
  const navigate = useNavigate()
  const [forms, setForms] = useState([])

  const getUserFormsFromDb =async function () {
    try {
      if(!user) return
      const userForms = await getUserForms(user._id)
      setForms(userForms)
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
const checkIfUser = function () {
  if (!user) {
    navigate("/")
  }
}
  useEffect(() => {
    checkIfUser()
    getUserFormsFromDb()
  })

  return <div>{user?.email}
    <button onClick={()=>navigate("/formBuilder")}>Add New Form</button>
    <div className="userForms">
      {
        forms?.map((form, i) => <div key={i}>
          <div className="userForm">
              <h2>{form.title}</h2>
              <h6>{form._id}</h6>
              <Copier formId ={form._id}/>
              <button onClick={()=>navigate("/responses/"+form._id)}>View Responses</button>
          </div>
        </div>)
      }
    </div>
  </div>;
};

export default Dashboard;
