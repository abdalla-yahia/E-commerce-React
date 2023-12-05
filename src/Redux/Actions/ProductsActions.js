
import { CREATE_PRODUCT, DELETE_ONE_PRODUCT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "../Types/Types";
import getAllHook, { CreateHook,DeleteteHook } from "../../Hooks/Custom-Hooks";

//Get All Products

export const getAllProducts = (sort='') => async (dispatch) => {
    try {
        const res = await getAllHook(`/api/v1/products?sort=${sort}`);
        // console.log(res.status)
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

// Create a new Product
export const createProduct = (formdata) => async (dispatch) => {
    try {
        const res = await CreateHook(`/api/v1/products`, formdata);
        // console.log(res.status)
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

// Get a Specific Product

export const getProduct = (id) => async (dispatch) => {
    try {
        const res = await getAllHook(`/api/v1/products/${id}`);
        console.log(res.status)
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

// Delete a product

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const res = await DeleteteHook(`/api/v1/products/${id}`)
        dispatch({
            type:DELETE_ONE_PRODUCT,
            payload:res.data,
        })
    } catch (error) {
        console.log(error);
    }
}