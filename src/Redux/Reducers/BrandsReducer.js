import {CREATE_BRAND, DELETE_BRAND, GET_ALL_BRANDS} from '../Types/Types'
const initialState = {
    brands: [],
    loading: true
}

 const BrandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BRANDS:
            return {
            ...state,
                brands: action.payload,
                loading: false
            }
            case CREATE_BRAND:
                return{
                    ...state,
                    loading: false
                }
                case DELETE_BRAND:
                    return{
                       ...state,
                        loading: false
                    }
        default:
            return state
    }
}

export default BrandsReducer