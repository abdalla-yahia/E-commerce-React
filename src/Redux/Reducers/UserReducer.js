import { AUTH_NEW_USER, GET_ALL_USERS, VIRIFY_RESET,LOG_USER,GET_ONE_USER,UPDATE_ONE_USER,ADD_ADDRESS,LOG_OUT_USER, FORGETPASS_USER, RESET_PASSWORD } from "../Types/Types"


const initialState =
{
    authusers: [],
    LoginUser:[],
    user:[],
    Address:[],
    forgetPass:[],
    virifycode:[],
    resetPassword:[],
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
                    forgetPass:action.payload,
                    loading: false
                }
            case VIRIFY_RESET:
                return {
                    ...state,
                    virifycode:action.payload,
                    loading: false
                }
            case RESET_PASSWORD:
                return {
                    ...state,
                    resetPassword:action.payload,
                    loading: false
                }
        default:
            return state
    }
}

export default authReducer