import axios from "axios";
const instance = axios.create({
    withCredentials:true,
    baseURL:'https://api.telemed.dev-h.ru/v1/'
    
})
export const Config_api = {
    Config(){
        axios.get(`https://api.telemed.dev-h.ru/v1/config`).then(
            response=>{
                console.log(response);
            }
        )
    }
}
export const Email_api = {
    Auth(){
        axios.get(`https://api.telemed.dev-h.ru/v1/config`).then(
            response=>{
                console.log(response);
            }
        )
    }
}