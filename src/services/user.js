import { signedRequest, url } from "./apiService";

export const getAuthenticatedUser = async function (tokenData) {
  try {
    if (tokenData) {
      signedRequest.defaults.headers = tokenData;
    }
    const response = await signedRequest.get(`${url}user/getUser`);
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const SignInApiManager = async function (user) {
  try {
    const response = await signedRequest.put(`${url}user/signIn`, user);
    signedRequest.defaults.headers = response.data;
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const SignUpApiManager = async function (user) {
  try {
    const response = await signedRequest.post(`${url}user/signUp`, user);
    signedRequest.defaults.headers = response.data;
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
