import {GET_ALL_CATEGORIES,CREATE_CATEGORY,DELETE_CATEGORY,GET_CATEGORY_BY_BG, GET_ONE_CATEGORY} from '../Types/Types'
import getAllHook,{CreateHook,DeleteteHook} from '../../Hooks/Custom-Hooks';

const getAllCategories =  (limit) => async (dispatch) => { 
        const response = await getAllHook(`/api/v1/categories/?limit=${limit}`)
        
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload:await response.data
        })
  
}
export default getAllCategories

// Get A Specific Category
export  const getOneCategory =  (id) => async (dispatch) => { 
    const response = await getAllHook(`/api/v1/categories/${id}`)
    
    dispatch({
        type: GET_ONE_CATEGORY,
        payload:await response.data
    })

}
// Get Category By Page Name
export const getCategoriesByPg = (page,limit) => async (dispatch) => { 
    try {
        const response =await getAllHook(`/api/v1/categories/?page=${page}&limit=${limit}`)
        
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