const defaultState = {
  phone: null,
  send: false,
  error: null,
}

const GET_CODE = 'GET_CODE';

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CODE:
      return {...state, phone: action.phone, send: action.status, error: action.error}
    default:
      return state
  }
}

export const getCodeAction = (phone, status, error) => ({type: GET_CODE, phone, status, error})