import axios from "axios";
import {defaultUrl} from "../configUrl";
import {getCodeAction, loginAction} from "../Reducers/loginReducer";
import {Navigate} from "react-router-dom";


export const axiosLogin = (phone) => {
  return async function (dispatch) {
    const response = await axios.get(`${defaultUrl}auth`, {
      params: {
        phone: phone
      }
    })
    const status = response.data.status
    if (status){
      dispatch(getCodeAction(phone, true, null))
    } else {
      let error = `Повторная отправка кода через ${response.data.resend_timeout} секунд`
      dispatch(getCodeAction(phone, false, error))
    }
  }
}
export const axiosSendCode = (phone, code) => {
  return async function (dispatch) {
    const response = await axios.get(`${defaultUrl}auth`, {
      params: {
        code: code,
        phone: phone,
      }
    })
    if (response.data.token){
      localStorage.setItem('login', true)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('isNewUser', response.data.is_new_user)
      return response.data
    }
  }
}