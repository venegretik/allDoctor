import axios from "axios";
import { getConfigAction, getAuthAction,getConfigPoliceAction } from "../Reducers/configReducer";
import { defaultUrl } from "../configUrl";

export const axiosConfig = () => {
  return async function (dispatch) {
    const response = await axios.get(`${defaultUrl}config`, {
      data: {
        platform: 'desktop'
      }
    })
    dispatch(getConfigAction(response.data))
  }
}

export const axiosAuth = (number, code) => {
  return async function (dispatch) {//стрелочная функция

    if (!code) {
      const response = await axios.get(`${defaultUrl}auth?phone=${number}`)
      dispatch(getAuthAction(number, response.data.status))
    } else {
      const response = await axios.get(`${defaultUrl}auth?phone=${number}&code=${code}`)
      if (response.data.status) {
        localStorage.setItem('token', response.data.token);
        console.log(response.data.is_new_user)
        dispatch(getAuthAction(number, false, response.data.is_new_user))
      }
    }
  }
}
export const axiosPrivacy = () => {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const response = await axios.get(`${defaultUrl}docs/privacy_policy`)
    dispatch(getConfigPoliceAction(response.data.data))
  }
}
export const axiosServices = () => {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const response = await axios.get(`${defaultUrl}docs/services_agreement`)
    dispatch(getConfigPoliceAction(response.data.data))
  }
}
export const axiosPersonal = () => {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const response = await axios.get(`${defaultUrl}docs/personal_data`)
    dispatch(getConfigPoliceAction(response.data.data))
  }
}
export const axiosAgreemet = () => {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    if (token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const response = await axios.get(`${defaultUrl}docs/user_agreement`)
    dispatch(getConfigPoliceAction(response.data.data))
  }
}
