import categoriesReducer from './CategoryReducers';
import BrandsReducer from './BrandsReducer';

import {combineReducers} from 'redux'
import SubCategoryReducer from './SubCategoriesReducer';
import ProductsReducer from './ProductsReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: BrandsReducer,
    subCategories:SubCategoryReducer,
    products:ProductsReducer
})

export default rootReducer