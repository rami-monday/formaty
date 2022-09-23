import axios from "axios";

const savedData = JSON.parse(localStorage.getItem("user"));

axios.defaults.headers = savedData ? { token: savedData.token } : null;

export const signedRequest = axios;

export const url = window.origin.includes("localhost")
? "http://localhost:3001/"
: "/";