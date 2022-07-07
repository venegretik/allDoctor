import {Config_api} from '../User_api/User-api'

const AUTHADD = "Auth-add";
let initialstate = {
    responce:{},
    status:false
};
const login_reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'Auth-add': {
            let stateCopy = {...state};
            stateCopy.responce = action.UserLogin;
            stateCopy.status = action.UserLogin.status;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const auth_HeaderAC = (responce) => {
    
    return {
        type: AUTHADD,
        UserLogin: responce
    }
    
}
export const LoginAuthThunkCreator = () => {
    return (dispatch) => {
        Config_api.Config().then(
            response=>{
                dispatch(auth_HeaderAC(response))

            }
        )
    }
}
export default login_reducer;