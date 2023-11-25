import getAllHook,{CreateHook, DeleteteHook, UpdateHook} from "../../Hooks/Custom-Hooks";
import {CREATE_BRAND, DELETE_BRAND, GET_ALL_BRANDS, GET_ONE_BRANDS, UPDATE_BRAND} from '../Types/Types'

const getAllBrandsHook =(page,e=10)=> async(dispatch) => {
const brands = await getAllHook(`/api/v1/brands/?page=${page}&limit=${e}`)
        dispatch({
            type: GET_ALL_BRANDS,
            payload: brands.data
        })
}
export default getAllBrandsHook

//Create a new instance of the current brands object
export const CreateBrand =(formData)=>async (dispatch) => {
    const brand = await CreateHook('/api/v1/brands/',formData)
    dispatch({
        type: CREATE_BRAND,
        payload: brand.data
    })
}

//Delete a brand

export const DeleteBrand = (id) => async (dispatch) => {
    const brand = await DeleteteHook(`/api/v1/brands/${id}/`)
    dispatch({
        type: DELETE_BRAND,
        payload: brand.data
    })
}

//Update a brand

export const UpdateBrand = (id,formData) => async (dispatch) => {
    const brand = await UpdateHook(`/api/v1/brands/${id}/`,formData)
    dispatch({
        type: UPDATE_BRAND,
        payload: brand.data
    })
}

//Get a Specific Brand

export const GetBrand = (id) => async (dispatch) => {
    const brand = await getAllHook(`/api/v1/brands/${id}/`)
    dispatch({
        type: GET_ONE_BRANDS,
        payload: brand.data
    })
}

