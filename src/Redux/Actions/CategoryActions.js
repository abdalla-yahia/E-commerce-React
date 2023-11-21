import {GET_ALL_CATEGORIES} from '../Types/Types'
import getAllCategoriesHook from '../../Hooks/Custom-Hooks';

const getAllCategories = (page,e) =>async (dispatchEvent) => { 
    try {
        const response =await getAllCategoriesHook(`/api/v1/categories/?page=${page}&limit=${e}`)
        
        dispatchEvent({
            type: GET_ALL_CATEGORIES,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export default getAllCategories