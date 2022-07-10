const defaultState = {
  phone: null,
  code: null,
  send: false,
  error: null
}

const GET_CODE = 'GET_CODE';
const LOGIN = 'LOGIN';
const CHANGE_PHONE = 'CHANGE_PHONE';

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CODE:
      return {...state, phone: action.phone, send: action.status, error: action.error}
    case LOGIN:
      return {...state, code: action.payload}
    case CHANGE_PHONE:
      return {...state, send: action.payload}
    default:
      return state
  }
}

export const getCodeAction = (phone, status, error) => ({type: GET_CODE, phone, status, error})
export const loginAction = (payload) => ({type: LOGIN, payload})