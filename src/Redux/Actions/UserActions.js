import getAllHook,{CreateHook} from "../../Hooks/Custom-Hooks";
import { AUTH_NEW_USER, GET_ALL_USERS } from "../Types/Types";

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

export default getAllUsers

// Create a new auth user

export const authNewUser = (user) => async (dispatch) => {
    try {
        const newUser = await CreateHook('/api/v1/auth/signup',user)
        dispatch({
            type: AUTH_NEW_USER,
            payload: newUser.data
        })
    } catch (error) {
        console.log(error)
        
    }
}