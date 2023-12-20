import {GET_ALL_CATEGORIES,CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORY_BY_BG, GET_ONE_CATEGORY, UPDATE_A_CATEGORY} from '../Types/Types'

const initiaState = {
    categories: [],
    oneCategory:{},
    loading: true
}

const categoriesReducer = (state=initiaState, action) => {

    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
            case GET_ONE_CATEGORY:
                return {
              ...state,
                oneCategory: action.payload,
                loading: false
                }
        case GET_CATEGORY_BY_BG:
            return {
            ...state,
                categories: action.payload,
                loading: false
            }
            
        case CREATE_CATEGORY:
            return {
           ...state,
           loading: false
        }
        case UPDATE_A_CATEGORY:
            return {
                ...state,
                loading :false
            }
           case DELETE_CATEGORY:
            return {
          ...state,
          loading: false}
        default:
            return state
    }
}
export default categoriesReducer;
