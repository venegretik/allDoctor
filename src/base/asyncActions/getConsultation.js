import axios from "axios";
import { defaultUrl } from "../configUrl";
import { consultationAction, consultationHistoryAction, consultationDeleteAction } from "../Reducers/ConsultationReducer";
export const axiosConsultation = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}consultations`);
        dispatch(consultationAction(response.data.data));
        return response.data;
    }
}
export const axiosConsultationHistory = (totalPage = 1, specialization = 1) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}consultation/history`, {
            params: {
                specialization_id: specialization,
                page: totalPage
            }
        }
        );
        const responceObj = {
            DoctorArray: response.data.data.items,
            page: response.data.data.pagination.current_page,
            totalPage: response.data.data.pagination.total_page,
            specialization_id: specialization
        }
        dispatch(consultationHistoryAction(responceObj));
    }
}
export const axiosConsultationDelete = (consultation_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.delete(`${defaultUrl}consultation/${consultation_id}`);
        dispatch(consultationDeleteAction(consultation_id));
    }
}
export const axiosConsultationPuy = (consultation_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(`${defaultUrl}consultation/${consultation_id}/pay`);
        return response.data.data
    }
}