import { signedRequest, url } from "./apiService";

export const getUserForms = async function (userId) {
  try {
    const response = await signedRequest.get(
      `${url}form/getUserForms`
    );
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const getOneFormById = async function (formId) {
  try {
    const response = await signedRequest.get(
      `${url}form/getFormById/${formId}`
    );
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const addForm = async function (form) {
  try {
    const response = await signedRequest.post(`${url}form/addForm`, form);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const deletFormById = async function (formId) {
  try {
    const response = await signedRequest.delete(
      `${url}form/deleteFormById/${formId}`
    );
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
