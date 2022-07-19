import axios from "axios";
import { defaultUrl } from "../configUrl";
import {ProfileAction, ProfileBalanceAction, ProfileReferralAction, ProfilePuyAction, 
    ProfileFriendAction, ProfileHistoryAction, ProfileMedCartAction, ProfileResultAction} from "../Reducers/UserReducer";
import { getShortInfo } from "./getMainPageInfo";
export const axiosProfile = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user`);
        dispatch(ProfileAction(response.data.data))
    }
}
export const axiosProfileBalance = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user/balance`);
        dispatch(ProfileBalanceAction(response.data.data));
    }
}
export const axiosProfileRefferal = () => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user/referral`);
        dispatch(ProfileReferralAction(response.data.data));
    }
}
export const axiosProfilePay = (obj) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(`${defaultUrl}user/balance/pay`,{...obj});
        dispatch(ProfilePuyAction(response.data.data));
    }
}
export const axiosProfileFriend = (obj) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(`${defaultUrl}user/balance/payout`,{...obj});
        dispatch(ProfileFriendAction(response.data.data));
    }
}
export const axiosProfileHistory = (obj) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user/payment/history`);
        dispatch(ProfileHistoryAction(response.data.data));
    }
}
export const axiosProfileMedCart = (obj) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user/medcard`);
        dispatch(ProfileMedCartAction(response.data.data));
    }
}
export const axiosProfileResult = (page, type) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.get(`${defaultUrl}user/research?page=${page}&type=${type}`);
        dispatch(ProfileResultAction(response.data.data));
        console.log(response.data.data)
    }
}
export const axiosProfileEdit = (obj) => {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token)
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(`${defaultUrl}user`,{...obj});
        dispatch(ProfileAction(response.data.data));
        dispatch(getShortInfo());
    }
}