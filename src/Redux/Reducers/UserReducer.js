import { AUTH_NEW_USER, GET_ALL_USERS } from "../Types/Types"


const initialState =
{
    authusers: [],
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
        case AUTH_NEW_USER:
            return {
              ...state,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer