import axios from "axios";
import { defaultUrl } from "../configUrl";
import { getCodeAction } from "../Reducers/loginReducer";


export const axiosLogin = (phone) => {
  return async function (dispatch) {
    const response = await axios.get(`${defaultUrl}auth`, {
      params: {
        phone: phone
      }
    })
    const status = response.data.status
    if (status) {
      dispatch(getCodeAction(phone, true, null))
    } else {
      let error = `Повторная отправка кода через ${response.data.resend_timeout} секунд`
      dispatch(getCodeAction(phone, false, error))
    }
  }
}
export const axiosSendCode = (phone, code) => {
  return async function () {
    const response = await axios.get(`${defaultUrl}auth`, {
      params: {
        code: code,
        phone: phone,
      }
    })
    if (response.data.token) {
      localStorage.setItem('login', true)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('isNewUser', response.data.is_new_user)
      window.location.reload()
    } else {
      return response.data.error.fields.code[0]
    }
  }
}
export const axiosEmailEdit = (code=0, email="") => {
  return async function (dispatch) {
    const response = await axios.post(`${defaultUrl}user/email`, {
      params: {
        email:email,
        code:code
      }
    })
    const status = response.data.status
    if (status) {
      dispatch(getCodeAction(email, true, null))
    } else {
      let error = `Повторная отправка кода через ${response.data.resend_timeout} секунд`
      dispatch(getCodeAction(email, false, error))
      
    }
    return response.data;
  }
}