import { CREATE_PRODUCT,GET_ALL_PRODUCTS,GET_PRODUCTS_OF_BRAND,GET_PRODUCTS_OF_CATEGORY, GET_ALL_CART_PRODUCTS,DELETE_CART_PRODUCT,GET_ONE_PRODUCT,DELETE_ONE_PRODUCT, CART_PRODUCTS, GET_PRODUCTS_OF_SUB_CATEGORY, UPDATE_A_PRODUCT } from "../Types/Types";

const initialState = {
    products: [],
    productsCategory:[],
    productsBrands:[],
    productsSubCategory:[],
    oneProduct:[],
    status: null,
    cartProducts:[],
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
                products:[...state.products, action.payload]
            };
            
        case GET_ONE_PRODUCT:
            return {
          ...state,
          oneProduct:action.payload,
          loading: false,
        };
        case UPDATE_A_PRODUCT:
            return{
                ...state,
                loading: false,
            }
        case DELETE_ONE_PRODUCT:
            return {
                ...state,
                loading: false,
            }
            case CART_PRODUCTS:
                return {
                    ...state,
                    cartProducts: [...state.cartProducts,action.payload]
                }
            case GET_ALL_CART_PRODUCTS:
                return {
                    ...state,
                    cartProducts: action.payload
                }
            case DELETE_CART_PRODUCT:
                return {
                    ...state,
                    cartProducts: [...state.cartProducts]
                }
                case GET_PRODUCTS_OF_CATEGORY:
                    return {
                    ...state,
                    productsCategory:action.payload
                    }
                case GET_PRODUCTS_OF_BRAND:
                    return {
                        ...state,
                        productsBrands: action.payload
                    }
                case GET_PRODUCTS_OF_SUB_CATEGORY:
                    return {
                        ...state,
                        productsSubCategory: action.payload
                    }
        default:
            return state;
    }
}

export default ProductsReducer;