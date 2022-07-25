const defaultState = {
  config: null,
  loading: false,
  number_send: false,
  is_new_user: false,
  header_text: "Главная",
  text_police: "",
  file: "",
  title:""
}

const GET_CONFIG = 'GET_CONFIG';
const GET_AUTH = 'GET_AUTH';
const GET_HEADER = 'GET_HEADER';
const GET_POLICE = 'GET_POLICE';
export const configReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return { ...state, config: action.payload, loading: true }
    case GET_AUTH:
      return { ...state, number_send: action.number_send, is_new_user: action.is_new_user }
    case GET_HEADER:
      return { ...state, header_text: action.text}
      case GET_POLICE:
        return {...state, text_police: action.text.html,
          title: action.text.title,
          file: action.text.file}

    default:
      return state;
  }
}

export const getConfigAction = (payload) => ({ type: GET_CONFIG, payload })
export const getAuthAction = (number, number_send, is_new_user) => ({ type: GET_AUTH, number, number_send, is_new_user })
export const getConfigHeaderAction = (text) => ({ type: GET_HEADER, text })
export const getConfigPoliceAction = (text) => ({ type: GET_POLICE, text })