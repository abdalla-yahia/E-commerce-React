import getAllCategoriesHook from "../../Hooks/Custom-Hooks";
import {GET_ALL_BRANDS} from '../Types/Types'

const getAllBrandsHook =(page,e)=> async(dispatch) => {
const brands = await getAllCategoriesHook(`/api/v1/brands/?page=${page}&limit=${e}`)
        dispatch({
            type: GET_ALL_BRANDS,
            payload: brands.data
        })
}

export default getAllBrandsHook
