import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../services/form";

const Dashboard = ({ user }) => {
  const navigate = useNavigate()
  const [forms, setForms] = useState([])

  const getUserFormsFromDb =async function () {
    try {
      console.log("1");
      const userForms = await getUserForms(user._id)
      setForms(userForms)
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  useEffect(() => {
    getUserFormsFromDb()
    console.log("2");
  },[])

  return <div>{user.email}
    <button onClick={()=>navigate("/formBuilder")}>Add New Form</button>
    <div className="userForms">
      {
        forms?.map((form, i) => <div key={i}>
          <div className="userForm">
              <h2>{form.title}</h2>
              <h6>{form._id}</h6>
              <button onClick={()=>navigate("/responses/"+form._id)}>View Responses</button>
          </div>
        </div>)
      }
    </div>
  </div>;
};

export default Dashboard;
