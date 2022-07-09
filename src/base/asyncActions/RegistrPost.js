import {RegisterAction} from "../Reducers/registerReducer"
import axios from "axios";
import { defaultUrl } from '../configUrl'

export const axiosRegister = (obj) => {
  return async function (dispatch) {
    const token = localStorage.getItem('token');
    if(token){
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    const response = await axios.post(`${defaultUrl}user`, {...obj})
    if (response.data.status) {
      console.log(obj);
      dispatch(RegisterAction(obj))
    }
  }
}