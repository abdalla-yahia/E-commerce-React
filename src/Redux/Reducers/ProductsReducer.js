import { CREATE_PRODUCT,GET_ALL_PRODUCTS, GET_ONE_PRODUCT,DELETE_ONE_PRODUCT } from "../Types/Types";

const initialState = {
    products: [],
    oneProduct:{},
    loading: true,
    
}

const ProductsReducer = (state=initialState, action) => {

    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
           ...state,
                products: action.payload,
                loading: false,
            };
        case CREATE_PRODUCT:
            return {
           ...state,
                loading: false,
            };
            
        case GET_ONE_PRODUCT:
            return {
          ...state,
          oneProduct:action.payload,
          loading: false,
        };
        case DELETE_ONE_PRODUCT:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}

export default ProductsReducer;