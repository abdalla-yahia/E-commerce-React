import {GET_ALL_CATEGORIES,CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORY_BY_BG} from '../Types/Types'

const initiaState = {
    categories: [],
    loading: true
}

const categoriesReducer = (state=initiaState, action) => {

    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
            
                categories: action.payload,
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
           loading: false}

           case DELETE_CATEGORY:
            return {
          ...state,
          loading: false}
        default:
            return state
    }
}
export default categoriesReducer;
