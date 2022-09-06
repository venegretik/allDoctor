import axios from "axios";
import { defaultUrl } from "../configUrl";
import {
  ProfileAction,
  ProfileBalanceAction,
  ProfileReferralAction,
  ProfilePuyAction,
  ProfileFriendAction,
  ProfileHistoryAction,
  ProfileMedCartAction,
  ProfileResultAction,
  ProfilePhotoAction,
  ProfileResultSelectAction,
  ProfileResultStartAction
} from "../Reducers/UserReducer";
import { getNotificationDeleteAction, getNotificationDeleteAllAction } from "../Reducers/mainPageReducer";
import { getShortInfo } from "./getMainPageInfo";
export const axiosProfile = () => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`${defaultUrl}user`);
    dispatch(ProfileAction(response.data.data));
  };
};
export const axiosProfileBalance = () => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`${defaultUrl}user/balance`);
    dispatch(ProfileBalanceAction(response.data.data));
  };
};
export const axiosProfileRefferal = () => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`${defaultUrl}user/referral`);
    dispatch(ProfileReferralAction(response.data.data));
  };
};
export const axiosProfilePay = (obj) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`${defaultUrl}user/balance/pay`, {
      ...obj,
    });
    dispatch(ProfilePuyAction(response.data));
    return response.data;
  };
};
export const axiosProfileFriend = (obj) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`${defaultUrl}user/balance/payout`, {
      ...obj,
    });
    dispatch(ProfileFriendAction(response.data));
    return response.data;
  };
};
export const axiosProfileHistory = (page = 1) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(
      `${defaultUrl}user/payment/history?page=${page}`
    );
    dispatch(ProfileHistoryAction(response.data.data, page === 1 ? "new" : "old"));
    return response.data;
  };
};
export const axiosProfileMedCart = (obj) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(`${defaultUrl}user/medcard`);
    dispatch(ProfileMedCartAction(response.data.data));
  };
};
export const axiosProfileResult = (page = 1, type = 0, typeStart = false) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(
      `${defaultUrl}user/research?page=${page}&type=${type}`
    );
    !typeStart ? dispatch(ProfileResultAction(response.data.data)) : dispatch(ProfileResultStartAction(response.data.data));
    return response.data
  };
};
export const axiosProfileResultSelect = (page = 1, type = 0) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.get(
      `${defaultUrl}user/research?page=${page}&type=${type}`
    );
    dispatch(ProfileResultSelectAction(response.data.data, type));
  };
};
export const axiosProfileEdit = (obj) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`${defaultUrl}user`, { ...obj });
    dispatch(ProfileAction(response.data.data));
    dispatch(getShortInfo());
    return response.data;
  };
};
export const axiosProfileEmailEdit = (code = 0, email = null) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`${defaultUrl}user/email`, {
        code: code,
        email: email
    });
    return response.data
  };
};
export const axiosProfilePhoneEdit = (code = 0, phone = null) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`${defaultUrl}user/phone`, {
        code: code,
        phone: phone
    });
    return response.data
  };
};
export const axiosProfileUpload = (obj = {}) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post(`${defaultUrl}user/research`, {
      params: {
        ...obj
      },
    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data
  };
};
export const axiosProfileDeleteNot = (notification_id) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.delete(
      `${defaultUrl}user/notification/${notification_id}`
    );
    dispatch(getNotificationDeleteAction(notification_id));
    return response.data;
  };
};
export const axiosProfileDeleteNotAll = () => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.delete(`${defaultUrl}user/notification/all`);
    dispatch(getNotificationDeleteAllAction())
    return response.data;
  };
};
export const axiosProfilePhotoUpload = (photo) => {
  return async function (dispatch) {
    const token = localStorage.getItem("token");
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    var formData = new FormData();
    formData.append("photo", photo[0]);
    const response = await axios.post(`${defaultUrl}user/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(ProfilePhotoAction(response.data));
    return response.data;
  };
};
