const defaultState = {
    short_name: "",
    firstname: "",
    lastname: "",
    secondname: "",
    phone: "",
    gender: 1,
    birthday: "",
    email: "",
    photo: "",
    referral: "",
    has_notifications: true,
    balance: 0,
    utitlityShow:false,
    payment_url:"",
    history:[],
    med_cart:{},
    file_history:[],
    current_page:1,
    total_page:1,
    UtilityAudioId:"",
    UtilityVideoId:""
  }
  const USER_ARRAY = 'USER_ARRAY';
  const BALANCE = 'BALANCE';
  const REFFERAL = 'REFFERAL';
  const URL = 'URL';
  const UTILITYAUDIO = 'UTILITYAUDIO';
  const FRIEND_REQUEST = 'FRIEND_REQUEST';
  const HISTORY_REQUEST = 'HISTORY_REQUEST';
  const MED_CART = 'MED_CART';
  const RESULT = 'RESULT';
  const PHOTO = 'PHOTO';
  const RESULT_SELECT = 'RESULT_SELECT';
  const UTILITY = 'UTILITY';
  export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_ARRAY:
            return{
                ...state,
                ...action.Profile_array
            }
        case BALANCE:
            return{...state, balance:action.Balance.balance}
        case REFFERAL:
            return {...state, referral:action.Referral.referral}
        case URL:
            return {...state,payment_url: action.payment_url.payment_url}
        case FRIEND_REQUEST:
            return {...state, balance:action.obj.balance}
        case HISTORY_REQUEST:
            return {...state,history:state.history.concat(action.obj.items),
                current_page:action.obj.pagination.current_page,
                total_page:action.obj.pagination.total_page}
        case MED_CART:
            return {...state,med_cart:{...action.obj}}
        case RESULT:
            return{...state, file_history:state.file_history.concat(action.obj.items), 
                current_page:action.obj.pagination.current_page,
                total_page:action.obj.pagination.total_page}
        case RESULT_SELECT:
            return{
                ...state, file_history:[...action.obj.items], 
                current_page:action.obj.pagination.current_page,
                total_page:action.obj.pagination.total_page
            }
        case PHOTO:
            return {
                ...state,
                photo:action.obj.photo
            }
        case UTILITY:
            return{
                ...state,
                utitlityShow:action.Show
            }
        case UTILITYAUDIO:
            return{
                ...state,
                UtilityAudioId:action.Id
            }
        default:
            return state
    }
}
export const ProfileAction= (Profile_array) => ({ type: USER_ARRAY, Profile_array});
export const ProfileBalanceAction = (Balance) =>({ type: BALANCE, Balance});
export const ProfileReferralAction = (Referral) =>({ type: REFFERAL, Referral});
export const ProfilePuyAction = (payment_url) =>({ type: URL, payment_url});
export const ProfileFriendAction = (obj) =>({ type: FRIEND_REQUEST, obj});
export const ProfileHistoryAction = (obj) =>({ type: HISTORY_REQUEST, obj});
export const ProfileMedCartAction = (obj) =>({ type: MED_CART, obj});
export const ProfileResultAction = (obj) =>({ type: RESULT, obj});
export const ProfileResultSelectAction = (obj) =>({ type: RESULT_SELECT, obj});
export const ProfilePhotoAction = (obj) =>({ type: PHOTO, obj});
export const ProfileUtilityAction = (Show) =>({ type: UTILITY, Show});
export const ProfileUtilityAudioAction = (Id) =>({ type: UTILITYAUDIO, Id});