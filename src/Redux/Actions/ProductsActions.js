
import { CREATE_PRODUCT } from "../Types/Types";
import { CreateHook } from "../../Hooks/Custom-Hooks";

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