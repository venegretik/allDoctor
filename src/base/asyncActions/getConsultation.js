import axios from "axios";
import { defaultUrl } from "../configUrl";
import { consultationAction, consultationHistoryAction, consultationHistoryConsAction, consultationDeleteAction, consultationStartAction } from "../Reducers/ConsultationReducer";
import { paymentDateTimeAction } from "../Reducers/paymentReducer";
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
export const axiosConsultationHistory = (specialization = 1, totalPage = 1, date_to = "2022-01-25", date_from = "2022-02-25") => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}consultation/history`, {
            params: {
                specialization_id: specialization,
                page: totalPage,
                date_from: date_from,
                date_to: date_to
            }
        }
        );
        const responceObj = {
            DoctorArray: response.data.data.items,
            page: response.data.data.pagination.current_page,
            totalPage: response.data.data.pagination.total_page,
            date_from: date_from,
            date_to: date_to,
            specialization_id: specialization
        }
        dispatch(consultationHistoryAction(responceObj));
    }
}
export const consultationHistoryCons = (specialization = 1, totalPage = 1, date_to = "2022-01-25", date_from = "2022-02-25") => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}consultation/history`, {
            params: {
                specialization_id: specialization,
                page: totalPage,
                date_from: date_from,
                date_to: date_to
            }
        }
        );
        const responceObj = {
            DoctorArray: response.data.data.items,
            page: response.data.data.pagination.current_page,
            totalPage: response.data.data.pagination.total_page,
            date_from: date_from,
            date_to: date_to,
            specialization_id: specialization
        }
        dispatch(consultationHistoryConsAction(responceObj));
    }
}
export const axiosConsultationDelete = (consultation_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        axios.delete(`${defaultUrl}consultation/${consultation_id}`);
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
export const axiosConsultationCalendar = (consultation_id, slot_id, DateStr = 1) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(`${defaultUrl}consultation/${consultation_id}/reschedule`, {
            params: {
                slot_id: slot_id
            }
        });
        dispatch(paymentDateTimeAction(DateStr))
        return response.data.status
    }
}
export const axiosConsultationStart = (consultation_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}consultation/${consultation_id}/start`);
        dispatch(consultationStartAction(response.data.data.doctor))

    }
}
export const axiosConsultationChat = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        axios.get(`${defaultUrl}chat`);
    }
}