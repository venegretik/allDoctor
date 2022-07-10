const defaultState = {
  shortName: null,
}

const GET_SHORT_NAME = 'GET_SHORT_NAME';

export const mainPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SHORT_NAME:
      return {...state, shortName: action.payload}
    default:
      return state
  }
}

export const getShortNameAction = (payload) => ({type: GET_SHORT_NAME, payload})