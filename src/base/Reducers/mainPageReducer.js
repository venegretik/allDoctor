const defaultState = {
  shortName: null,
  notification:[], 
  total_page:1,
  current_page:3
}

const GET_SHORT_NAME = 'GET_SHORT_NAME';
const GET_NOTIFICATION = 'GET_NOTIFICATION';
const GET_NOTIFICATIONDELETE = 'GET_NOTIFICATIONDELETE';
const GET_NOTIFICATIONDELETEALL = 'GET_NOTIFICATIONDELETEALL';
export const mainPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SHORT_NAME:
      return {...state, shortName: action.payload}
    case GET_NOTIFICATION:
      return {...state, notification: action.type_add==="old" ? state.notification.concat(action.payload.items) : [...action.payload.items], total_page:action.payload.pagination.total_page,current_page:action.payload.pagination.current_page}
      case GET_NOTIFICATIONDELETE:
        return {...state, notification: state.notification.filter(el => el.notofication_id !== action.id)}
      case GET_NOTIFICATIONDELETEALL:
        return {...state, notification:[]}
    default:
      return state
  }
}

export const getShortNameAction = (payload) => ({type: GET_SHORT_NAME, payload})
export const getNotificationAction = (payload, type_add) => ({type: GET_NOTIFICATION, payload, type_add})
export const getNotificationDeleteAction = (id) => ({type: GET_NOTIFICATIONDELETE, id})
export const getNotificationDeleteAllAction = () => ({type: GET_NOTIFICATIONDELETEALL})