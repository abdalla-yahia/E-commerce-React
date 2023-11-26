import {CREATE_BRAND, DELETE_BRAND, GET_BRANDS_BY_PG ,GET_ALL_BRANDS, GET_ONE_BRANDS, UPDATE_BRAND} from '../Types/Types'
const initialState = {
    brands: [],
    onebrand:{},
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
            case GET_BRANDS_BY_PG:
                return {
               ...state,
               brands: action.payload,
               loading:false
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
            case UPDATE_BRAND:
                return{
                    ...state,
                    loading: false
                }
            case GET_ONE_BRANDS :
                return{
                ...state,
                onebrand: action.payload,
                loading: false
                }
        default:
            return state
    }
}

export default BrandsReducer