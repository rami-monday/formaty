import axios from "axios";

const url = "http://localhost:3001/"

export const getUserFormsController = async function() {
    try {
        const response = await axios.get(`${url}form/getUserForms`)
        return response.data
    } catch (error) {
        res.sendstatus(500)
    }
}

export const getOneFormById = async function() {
    try {
        const response = await axios.get(`${url}form/getFormById`)
        return response.data
    } catch (error) {
        res.sendstatus(500)
    }
}

export const addFormController = async function() {
    try {
        const response = await axios.post(`${url}form/addForm`)
        return response.data
    } catch (error) {
        res.sendstatus(500)
    }
}