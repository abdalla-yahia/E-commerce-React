import { clear } from "@testing-library/user-event/dist/clear";
import getAllHook,{ CreateHook }  from "../../Hooks/Custom-Hooks";
import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORY, GET_ONE_SUB_CATEGORY } from "../Types/Types";

//Get All Sub Categories

const getAllSubCategory = (id) => async (dispatchEvent) => {
    try {
        const res = await getAllHook(`/api/v1/categories/${id}/subcategories`);
        dispatchEvent({
            type: GET_ALL_SUB_CATEGORY,
            payload: res.data
        })
        console.log(res.status)
    
    } catch (error) {
        console.log(error);
    }
};

export default getAllSubCategory;


//Create A new Sub Category

export const createSubCategory = (id,name) => async (dispatchEvent) => {
   try {
       const res = await CreateHook(`/api/v1/categories/${id}/subcategories`, {name});
       dispatchEvent({
        type: CREATE_SUB_CATEGORY,
        payload: res.data,
       })
    
   } catch (error) {
       console.log(error);
}
};

// Get a specific Sub Category

export const getSubCategory = (id,name) => async (dispatch) => {

    try {
        const res = await getAllHook(`/api/v1/subcategories/${id}`)
        dispatch({
            type: GET_ONE_SUB_CATEGORY,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
    }

}

