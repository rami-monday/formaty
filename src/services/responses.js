import axios from "axios";

const url = "/";

export const getResponses = async function (userId,formId) {
    try {
        const dbResponse = await axios.post(`${url}response/getFormResponses`,{userId,formId})
        return dbResponse.data
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

export const addResponse = async function (response) {
    try {
        const dbResponse = await axios.post(`${url}response/addResponse`,response)
        return dbResponse.data
    } catch (error) {
        alert(JSON.stringify(error))
    }
}