import {GET_ALL_CATEGORIES,CREATE_CATEGORY} from '../Types/Types'

const initiaState = {
    categories: [],
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
            
        case CREATE_CATEGORY:
            return {
           ...state,
           loading: false}
        default:
            return state
    }
}
export default categoriesReducer;
