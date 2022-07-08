
const defaultState = {
  config: null,
  loading: false,
  number_send: false
}

const GET_CONFIG = 'GET_CONFIG';
const GET_AUTH = 'GET_AUTH';

export const configReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return { ...state, config: action.payload, loading: true }
    case GET_AUTH:
      return { ...state, number_send: action.number_send }
    default:
      return state;
  }
}

export const getConfigAction = (payload) => ({ type: GET_CONFIG, payload })
export const getAuthAction = (number, code, number_send) => ({ type: GET_AUTH, number, code, number_send})