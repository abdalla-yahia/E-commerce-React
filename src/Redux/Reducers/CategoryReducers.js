import {GET_ALL_CATEGORIES} from '../Types/Types'

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
        default:
            return state
    }
}
export default categoriesReducer