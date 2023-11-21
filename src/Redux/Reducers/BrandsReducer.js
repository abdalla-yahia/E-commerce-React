import {GET_ALL_BRANDS} from '../Types/Types'
const initialState = {
    brands: [],
    loading: true
}

 const getAllBrandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return {
               ...state,
                brands: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default getAllBrandsReducer