import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.telemed.dev-h.ru/v1/',
  data:{
    platform:"desctop"
  }

})
export const Config_api = {
  Config() {
 return axios.get(`https://api.telemed.dev-h.ru/v1/config`).then(
      response => {
        return response.data
      }
    )
  }
}
export const Email_api = {
  Auth() {
    axios.get(`https://api.telemed.dev-h.ru/v1/config`).then(
      response => {
        return response.data;
      }
    )
  }
}