import getAllHook,{CreateHook, DeleteteHook, UpdateHook} from "../../Hooks/Custom-Hooks";
import {CREATE_BRAND, DELETE_BRAND,GET_BRANDS_BY_PG, GET_ALL_BRANDS, GET_ONE_BRANDS, UPDATE_BRAND, GET_ONE_BRAND} from '../Types/Types'

const getAllBrandsHook =(limit)=> async(dispatch) => {
const brands = await getAllHook(`/api/v1/brands/?limit=${limit}`)
        dispatch({
            type: GET_ALL_BRANDS,
            payload: brands.data
        })
}
export default getAllBrandsHook;

// Get A Specific Brand
export const getOneBrand =(id)=> async(dispatch) => {
    const brands = await getAllHook(`/api/v1/brands/${id}`)
            dispatch({
                type: GET_ONE_BRAND,
                payload: brands.data
            })
    }

// Get one Brand 
export const GetBrandByPAge =(page,limit) => async (dispatch) =>{
    const brand = await getAllHook(`/api/v1/brands/?page=${page}&limit=${limit}`)
    dispatch({
        type: GET_BRANDS_BY_PG,
        payload: brand.data
    })
}
//Create a new instance of the current brands object
export const CreateBrand =(formData)=>async (dispatch) => {
    
    const brand = await CreateHook('/api/v1/brands/',formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    dispatch({
        type: CREATE_BRAND,
        payload: brand.data,
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

