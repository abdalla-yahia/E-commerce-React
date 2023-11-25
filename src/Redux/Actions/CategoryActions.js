import {GET_ALL_CATEGORIES,CREATE_CATEGORY,DELETE_CATEGORY,GET_CATEGORY_BY_BG} from '../Types/Types'
import getAllHook,{CreateHook,DeleteteHook} from '../../Hooks/Custom-Hooks';

const getAllCategories =  (e) => async (dispatch) => { 
    try {
        const response = await getAllHook(`/api/v1/categories/?limit=${e}`)
        
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}
export default getAllCategories

export const getCategoriesByPg = (page,e=10) => async (dispatch) => { 
    try {
        const response =await getAllHook(`/api/v1/categories/?page=${page}&limit=${e}`)
        
        dispatch({
            type: GET_CATEGORY_BY_BG,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const CreateCategory = (formData) => async (dispatch) => {

    try {
        const response = await CreateHook(`/api/v1/categories/`,formData)
        dispatch({
            type: CREATE_CATEGORY,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const DeleteCategory = (id) => async (dispatch) => {

    try {
        const response = await DeleteteHook(`/api/v1/categories/${id}/`)
        dispatch({
            type: DELETE_CATEGORY,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}