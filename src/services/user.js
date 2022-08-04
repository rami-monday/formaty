import axios from "axios";

const url = "http://localhost:3001/";

export const SignInApiManager = async function () {
  try {
    const response = await axios.get(`${url}/user/signIn`);
    return response.data
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const SignUpApiManager = async function () {
    try {
      const response = await axios.post(`${url}/user/signUp`);
      return response.data
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
