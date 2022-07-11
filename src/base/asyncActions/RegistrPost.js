import axios from "axios";
import { defaultUrl } from '../configUrl'

export const axiosRegister = (obj) => {
  return async function () {
    const data = {};
    [...obj].forEach(e => {data[e[0]] = e[1]})
    const token = localStorage.getItem('token');
    if(token){
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    const response = await axios.post(`${defaultUrl}user`, {...data})
    if (response.data.status) {
      localStorage.setItem('isNewUser', false)
      return response.data.status
    }
  }
}