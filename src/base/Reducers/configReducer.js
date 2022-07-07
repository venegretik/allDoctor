
const defaultState = {
  config: null,
  loading: false
}

const GET_CONFIG = 'GET_CONFIG'

export const configReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return {...state, config: action.payload, loading: true}
    default:
      return state;
  }
}

export const getConfigAction = (payload) => ({type: GET_CONFIG, payload})