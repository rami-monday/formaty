import axios from "axios";

const url = window.origin.includes("localhost")
  ? "http://localhost:3001/"
  : "/";

export const getUserForms = async function (userId) {
  try {
    const response = await axios.get(`${url}form/getUserForms/${userId}`);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const getOneFormById = async function (formId) {
  try {
    const response = await axios.get(`${url}form/getFormById/${formId}`);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const addForm = async function (form) {
  try {
    console.log("33");
    const response = await axios.post(`${url}form/addForm`, form);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const deletFormById = async function (formId) {
  try {
    const response = await axios.delete(`${url}form/deleteFormById/${formId}`);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
