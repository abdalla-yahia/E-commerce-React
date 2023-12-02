
import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "../Types/Types";
import { CreateHook } from "../../Hooks/Custom-Hooks";

//Get All Products

export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await CreateHook(`/api/v1/products`);
        
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
        
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};