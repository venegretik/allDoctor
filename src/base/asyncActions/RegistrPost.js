import {RegisterAction} from "../Reducers/registerReducer"
import axios from "axios";
import { defaultUrl } from '../configUrl'

export const axiosRegister = (obj) => {
  return async function (dispatch) {
    const response = await axios.post(`${defaultUrl}user`, {...obj})
    if (response.data.status) {
      console.log(obj);
      dispatch(RegisterAction(obj))
    }
  }
}