import axios from "axios";
import {getConfigAction, getAuthAction} from "../Reducers/configReducer";

const url = 'https://api.telemed.dev-h.ru/v1/';

export const axiosConfig = () => {
  return async function (dispatch) {
    const response = await axios.get(`${url}config`)
    dispatch(getConfigAction(response.data))
  }
}

export const axiosAuth = (number,code) => {
  return async function (dispatch) {//стрелочная функция
    if(!code){
      const response = await axios.get(`${url}auth?phone = ${number}`)
      dispatch(getAuthAction(number, '', response.data.status))
    }
    else{
      await axios.get(`${url}auth`)
      dispatch(getAuthAction(number, code))
    }
  }
}