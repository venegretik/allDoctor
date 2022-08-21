import axios from "axios";
import { defaultUrl } from "../configUrl";
import { doctorArrayAction, branchArrayAction, branchOfflineArrayAction, DoctorMyArray, DoctorMyDelete } from "../Reducers/doctorReducer";

//Получение докторов по должности
export const axiosDoctor = (totalPage = 1, specialization = 1, sort = "rate") => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctors`, {
            params: {
                branch_id: specialization,
                sort: sort,
                page: totalPage
            }
        })
        const responceObj = {
            DoctorArray: response.data.data.doctors,
            page: response.data.data.pagination.current_page,
            totalPage: response.data.data.pagination.total_page,
            specialization_id: specialization,
            sort: sort
        }

        dispatch(doctorArrayAction(responceObj));
    }
}

//Получение онлайн разделов
export const axiosBranch = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}branch`);
        dispatch(branchArrayAction(response.data.data.items));
        return response.data
    }
    
}

//Получение оффлайновых разделов
export const axiosBranchOffline = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}branch/offline`);
        dispatch(branchOfflineArrayAction(response.data.data.items));
    }
}

//get запрос на странице my-doctor
export const axiosMyDoctor = (page) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctors/my`, {
            params: {
                page: page
            }
        });
        dispatch(DoctorMyArray(response.data.data.doctors, response.data.data.pagination.current_page, response.data.data.pagination.total_page));
    }
}

//Удаление моего доктора
export const axiosDoctorDelete = (user_id) => {
    return async function (dispatch) {
        const response = await axios.delete(`${defaultUrl}doctors/my/${user_id}`);
        dispatch(DoctorMyDelete(user_id));
        return response.data
    }
}