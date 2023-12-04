import categoriesReducer from './CategoryReducers';
import BrandsReducer from './BrandsReducer';

import {combineReducers} from 'redux'
import SubCategoryReducer from './SubCategoriesReducer';
import ProductsReducer from './ProductsReducer';
import reviewReducer from './ReviewsReducer';
import authReducer from './UserReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: BrandsReducer,
    subCategories:SubCategoryReducer,
    products:ProductsReducer,
    reviews:reviewReducer,
    authusers:authReducer
})

export default rootReducer