import { AUTH_NEW_USER, GET_ALL_USERS, LOG_USER,GET_ONE_USER,UPDATE_ONE_USER,ADD_ADDRESS,LOG_OUT_USER, FORGETPASS_USER } from "../Types/Types"


const initialState =
{
    authusers: [],
    LoginUser:[],
    user:[],
    Address:[],
    loading: true,
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return {
              ...state,
              authusers: action.payload,
                loading: false
            }
            case GET_ONE_USER:
                return{
                    ...state,
                    user: action.payload,
                    loading: false
                }
            case UPDATE_ONE_USER:
                return{
                    ...state,
                    user: action.payload,
                    loading: false
                }
        case AUTH_NEW_USER:
            return {
            ...state,
                user: action.payload,
                loading: false
            }
        case ADD_ADDRESS:
            return {
            ...state,
            Address: action.payload,
                loading: false
            }
            case LOG_USER:
                return {
                    ...state,
                    LoginUser:action.payload,
                    loading: false
                }
            case LOG_OUT_USER:
                return {
                    ...state,
                    loading: false
                }
            case FORGETPASS_USER:
                return {
                    ...state,
                    loading: false
                }
        default:
            return state
    }
}

export default authReducer