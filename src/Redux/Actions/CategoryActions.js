import {GET_ALL_CATEGORIES,CREATE_CATEGORY} from '../Types/Types'
import getAllHook,{CreateHook} from '../../Hooks/Custom-Hooks';

const getAllCategories = (page,e) =>async (dispatchEvent) => { 
    try {
        const response =await getAllHook(`/api/v1/categories/?page=${page}&limit=${e}`)
        
        dispatchEvent({
            type: GET_ALL_CATEGORIES,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export default getAllCategories

export const CreateCategory = (formData) => async (dispatchEvent) => {

    try {
        const response = await CreateHook(`/api/v1/categories/`,formData)
        dispatchEvent({
            type: CREATE_CATEGORY,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}