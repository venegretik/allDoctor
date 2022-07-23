import axios from "axios";
import { defaultUrl } from "../configUrl";
import { reviewsAction } from "../Reducers/reviewsReducer";
import { recordingAction, recordingInfoAction, recordingConsultationAction } from "../Reducers/recordingReducer";
export const axiosReviews = (doctor_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctor/${doctor_id}/review`);
        dispatch(reviewsAction(response.data.data));
    }
}
export const axiosReview = (doctor_id = 1, page = 1) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctor/${doctor_id}/reviews`,{
            params: {
                page: page
            }
        });
        dispatch(recordingAction(response.data.data));
    }
}
export const axiosRecordingDoctor = (doctor_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctor/${doctor_id}`);
        dispatch(recordingInfoAction(response.data.data));
    }
}
export const axiosPostReviews = (doctor_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(`${defaultUrl}doctor/${doctor_id}/review`);
    }
}
export const axiosRecordingCalculator = (doctor_id) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}doctor/${doctor_id}/slots`);
        dispatch(recordingConsultationAction(response.data.data));
        console.log(response.data.data)
    }
}