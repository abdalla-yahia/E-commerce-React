import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORY, GET_ONE_SUB_CATEGORY } from "../Types/Types";

const initialState = {
    subCategories: [],
    oneSubcategory:[],
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
                subCategories: action.payload,
                loading: false,
                }
                case GET_ONE_SUB_CATEGORY:
                    return {
                        oneSubcategory:action.payload,
                        loading: false,
                    }
            default:
                return state;
        }
    }

export default SubCategoryReducer;