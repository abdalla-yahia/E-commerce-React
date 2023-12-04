
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "../Types/Types";
import getAllHook, { CreateHook } from "../../Hooks/Custom-Hooks";

//Get All Products

export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await getAllHook(`/api/v1/products`);
        console.log(res.status)
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
        console.log(res.status)
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

