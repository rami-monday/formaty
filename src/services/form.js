import axios from "axios";

const url = "http://localhost:3001/";

export const getUserFormsController = async function (userId) {
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

export const addFormController = async function (form) {
  try {
    const response = await axios.post(`${url}form/addForm`, form);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
