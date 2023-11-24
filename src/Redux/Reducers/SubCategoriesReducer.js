import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORY } from "../Types/Types";

const initialState = {
    subCategories: [],
    category:[],
    loading: true,
    
}

const SubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
            ...state,
            subCategories: action.payload,
            category: [...state.category],
                loading: false,
            }
            case GET_ALL_SUB_CATEGORY:
                return {
                ...state,
                    subCategories: action.payload,
                    category: [...state.category],
                    loading: false,
                }
            default:
                return state;
        }
    }

export default SubCategoryReducer;