import {Config_api} from '../User_api/User-api'

const AUTH_ADD = "Auth-add";
let initialState = {
  response: {},
  status: false
};
const login_reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Auth-add': {
      let stateCopy = {...state};
      stateCopy.response = action.UserLogin;
      stateCopy.status = action.UserLogin.status;
      return stateCopy;
    }
    default:
      return state;
  }
}
export const auth_HeaderAC = (response) => {

  return {
    type: AUTH_ADD,
    UserLogin: response
  }

}
export const LoginAuthThunkCreator = () => {
  return (dispatch) => {
    Config_api.Config().then(
      response => {
        dispatch(auth_HeaderAC(response))
      }
    )
  }
}
export default login_reducer;