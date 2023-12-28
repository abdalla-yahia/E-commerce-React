
import { CREATE_PRODUCT,GET_PRODUCTS_OF_CATEGORY,GET_PRODUCTS_OF_BRAND,GET_PRODUCTS_OF_SUB_CATEGORY, DELETE_ONE_PRODUCT,GET_ALL_CART_PRODUCTS,CART_PRODUCTS,DELETE_CART_PRODUCT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, UPDATE_A_PRODUCT, GET_ALL_PRODUCTS_IN_SEARCH } from "../Types/Types";
import getAllHook, { CreateHook,DeleteteHook,UpdateHook } from "../../Hooks/Custom-Hooks";

//Get All Products

export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await getAllHook(`/api/v1/products`);
        // console.log(res.status)
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

//Get All Products In Search with a spesific Word

export const getAllProductsInSearch = (query) => async (dispatch) => {
    try {
            const products = await getAllHook(`/api/v1/products?${query}`);
       await dispatch({
            type: GET_ALL_PRODUCTS_IN_SEARCH,
            payload: products.data,
        });
    } catch (error) {
        console.log(error);
    }
};

// Create a new Product
export const createProduct = (formdata) => async (dispatch) => {
    try {
        const res = await CreateHook(`/api/v1/products`,formdata);
        console.log(res.status)
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data,
            status: res.status
        });
    } catch (error) {
        console.log(error);
    }
};

// Get a Specific Product

export const getProduct = (id) => async (dispatch) => {
    try {
        const res = await getAllHook(`/api/v1/products/${id}`);
        console.log(res.status)
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};
// Update a Specific Product

export const updateProduct = (id,formdata) => async (dispatch) => {
    try {
        const res = await UpdateHook(`/api/v1/products/${id}`,formdata);
        console.log(res.status)
        dispatch({
            type: UPDATE_A_PRODUCT,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};


// Delete a product

export const deleteProduct = (id,token) => async (dispatch) => {
    try {
        const res = await DeleteteHook(`/api/v1/products/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
        dispatch({
            type:DELETE_ONE_PRODUCT,
            payload:res.data,
        })
    } catch (error) {
        console.log(error);
    }
}

// Get All  Products in Cart

export const getAllProductsinCart = (token) => async (dispatch) => {
    try {
        const res = await getAllHook(`/api/v1/wishlist/`,{
            headers:{
                'Authorization':'Bearer ' + token,
            }
        });
        console.log(res.status)
        dispatch({
            type: GET_ALL_CART_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};
// Set A Specific Products in Cart

export const setProductinCart = (token,id) => async (dispatch) => {
    try {
        const res = await CreateHook(`/api/v1/wishlist/`,{
            headers:{
                'Authorization':`Bearer ${token}`,
            }
        },id);
        console.log(res.status)
        dispatch({
            type: CART_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};


// Delete a product from cart

export const deleteProductfromCart = (id,token) => async (dispatch) => {
    try {
        const res = await DeleteteHook(`/api/v1/wishlist/${id}`,{
            headers:{
                'Authorization':'Bearer ' + token,
            }
        })
        console.log(res.status)
        dispatch({
            type:DELETE_CART_PRODUCT,
            payload:res.data,
        })
    } catch (error) {
        console.log(error);
    }
}


//Get the product of A specific category

export const getProductsOfCategory = (id) => async (dispatch) => {

    try {
        // let api = id !== '' ? `/api/v1/products/?category=${id}` :'/api/v1/products/'
        const res = await getAllHook(`/api/v1/products?category=${id}`)
        await dispatch({
            type:GET_PRODUCTS_OF_CATEGORY,
            payload:res.data,
        })
        
    } catch (error) {
        console.log(error)
    }
}
//Get the product of A specific brand

export const getProductsOfBrand = (id) => async (dispatch) => {

    try {
        const res = await getAllHook(`/api/v1/products/?brand=${id}`)
        dispatch({
            type:GET_PRODUCTS_OF_BRAND,
            payload:res.data,
        })
        
    } catch (error) {
        console.log(error)
    }
}
//Get the product of A specific subcategory

export const getProductsOfSubcategory = (id) => async (dispatch) => {

    try {
        const res = await getAllHook(`/api/v1/products/?subcategory=${id}`)
        dispatch({
            type:GET_PRODUCTS_OF_SUB_CATEGORY,
            payload:res.data,
        })
        
    } catch (error) {
        console.log(error)
    }
}
