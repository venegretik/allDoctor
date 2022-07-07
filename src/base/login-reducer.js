import {Config_api} from '../User_api/User-api'
let initialstate = {
};
const AUTHADD = "Auth-add";
const login_reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'Auth-add': {
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
                dispatch(auth_HeaderAC(response.data))
            }
        )
    }
}
export default login_reducer;