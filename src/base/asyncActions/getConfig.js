import axios from "axios";
import {getConfigAction, getAuthAction} from "../Reducers/configReducer";

const url = 'https://api.telemed.dev-h.ru/v1/';

export const axiosConfig = () => {
  return function (dispatch) {//стрелочная функция
    setTimeout(() => {
      axios.get(`${url}config`).then(
        response => dispatch(getConfigAction(response))
      )
    }, 2000)
  }
}
export const axiosAuth = (number,code) => {
  return function (dispatch) {//стрелочная функция
    if(!code){
      axios.get(`${url}auth`,{phone:number}).then(
        response => dispatch(getAuthAction(number, "" , response.data.status))
      )
    }
    else{
      axios.get(`${url}auth`).then(
        response => dispatch(getAuthAction(number, code))
      )
    }
      
  }
}
axiosConfig()