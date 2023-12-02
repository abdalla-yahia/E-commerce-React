import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORY } from "../Types/Types";

const initialState = {
    subCategories: [],
    
    loading: true,
    
}

const SubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
            ...state,
                loading: false,
            }
            case GET_ALL_SUB_CATEGORY:
            return {
            ...state,
                subCategories: action.payload,
                loading: false,
                }
            default:
                return state;
        }
    }

export default SubCategoryReducer;