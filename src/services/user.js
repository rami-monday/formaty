import axios from "axios";

const url = window.origin.includes("localhost")
  ? "http://localhost:3001/api/"
  : "/api/";

export const SignInApiManager = async function (user) {
  try {
    const response = await axios.put(`${url}user/signIn`, user);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const SignUpApiManager = async function (user) {
  try {
    const response = await axios.post(`${url}user/signUp`, user);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
