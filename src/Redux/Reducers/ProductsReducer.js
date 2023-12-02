import { CREATE_PRODUCT,GET_ALL_PRODUCTS } from "../Types/Types";

const initialState = {
    products: [],
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
                products: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}

export default ProductsReducer;