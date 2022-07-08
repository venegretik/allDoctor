import axios from "axios";
import { getConfigAction, getAuthAction } from "../Reducers/configReducer";

const url = 'https://api.telemed.dev-h.ru/v1/';

export const axiosConfig = () => {
  return async function (dispatch) {
    const response = await axios.get(`${url}config`)
    dispatch(getConfigAction(response.data))
  }
}

export const axiosAuth = (number, code) => {
  return async function (dispatch) {//стрелочная функция
    if (!code) {
      const response = await axios.get(`${url}auth?phone=${number}`)
      dispatch(getAuthAction(number, response.data.status))
    }
    else {
      const response = await axios.get(`${url}auth?phone=${number}&code=${code}`).then(response => {
        if (response.data.status == true) {
          localStorage.setItem('token', response.data.token);
          console.log(response.data.is_new_user)
          dispatch(getAuthAction(number, false, response.data.is_new_user))
        }
      });
    }
  }
}

