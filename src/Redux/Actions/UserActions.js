import getAllHook,{CreateHook, UpdateHook} from "../../Hooks/Custom-Hooks";
import { AUTH_NEW_USER, RESET_PASSWORD,GET_ALL_USERS,LOG_USER,VIRIFY_RESET,GET_ONE_USER,FORGETPASS_USER,UPDATE_ONE_USER,ADD_ADDRESS,LOG_OUT_USER } from "../Types/Types";


const config = {
    headers: { 
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
}}
// Get All Users

const getAllUsers = ()=>async (dispatchEvent) => {
    try {
        const users = await getAllHook('/api/v1/users')
        dispatchEvent({
            type: GET_ALL_USERS,
            payload: users.data
        })
        
    } catch (error) {
        console.log(error)
    }
}
// Get A specific User

export const getASpecificUser = (id,token)=>async (dispatchEvent) => {
    try {
        const users = await getAllHook(`/api/v1/users/${id}`
        ,{
            headers: { Authorization: 'Bearer ' + token}
        }
        )
        dispatchEvent({
            type: GET_ONE_USER,
            payload: users.data
        })
        
    } catch (error) {
        console.log(error)
    }
}
// Update A specific User

export const updateASpecificUser = (formadta)=>async (dispatchEvent) => {
    try {
        const users = await getAllHook(`/api/v1/users`,formadta,config)
        dispatchEvent({
            type: UPDATE_ONE_USER,
            payload: users.data
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default getAllUsers

// Create a new auth user

export const authNewUser = (user) => async (dispatch) => {
    try {
        const newUser = await CreateHook('/api/v1/auth/signup',user)
        dispatch({
            type: AUTH_NEW_USER,
            payload: newUser.data
        })
    } catch (e) {
        dispatch({
            type: AUTH_NEW_USER,
            payload:e.response.data.errors[0].msg
        })
        
    }
}

// Log a user

export const LogUser = (user) => async (dispatch) => {

    try {
        const User = await CreateHook('/api/v1/auth/login',user)
        dispatch({
            type: LOG_USER,
            payload: User.data,
        })
        console.log(User.status)
    } catch (e) {
        dispatch({
            type: LOG_USER,
            payload:e.response.data.message
        })
    }
}
// Log a user

export const AddNewAddress = (data) => async (dispatch) => {

    try {
        const Address = await CreateHook('/api/v1/addresses',data,config)
        dispatch({
            type: ADD_ADDRESS,
            payload: Address.data,
        })
        console.log(Address.status)
    } catch (error) {
        console.log(error)
    }
}
// LogOut a user

export const LogoutUser = () => async (dispatch) => {

    try {
        const user = await CreateHook('/api/v1/users/getMe',config)
        dispatch({
            type: LOG_OUT_USER,
            payload: user.data,
        })
        console.log(user.status)
    } catch (error) {
        console.log(error)
    }
}
// ForgetPassword a user

export const userForgetPassword = (email) => async (dispatch) => {

    try {
        const user = await CreateHook('/api/v1/auth/forgotPasswords',email)
        dispatch({
            type: FORGETPASS_USER,
            payload: user.data.status,
        })
    } catch (e) {
        dispatch({
            type: FORGETPASS_USER,
            payload: e.response.data.status,
        })
    }
}
// VirifyCode a user

export const userVerifyCode = (data) => async (dispatch) => {

    try {
        const user = await CreateHook('/api/v1/auth/verifyResetCode',data)
        dispatch({
            type: VIRIFY_RESET,
            payload: user.data.status,
        })
    } catch (e) {
        dispatch({
            type: VIRIFY_RESET,
            payload: e.response.data.status,
            // payload: e,
        })
    }
}
// Reset Password a user

export const userResetPassword = (data) => async (dispatch) => {

    try {
        const user = await UpdateHook('/api/v1/auth/resetPassword',data)
        dispatch({
            type: RESET_PASSWORD,
            payload: user,
        })
    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response.data.status,
            
        })
    }
}