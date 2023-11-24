import categoriesReducer from './CategoryReducers';
import BrandsReducer from './BrandsReducer';

import {combineReducers} from 'redux'
import SubCategoryReducer from './SubCategoriesReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: BrandsReducer,
    subCategories:SubCategoryReducer
})

export default rootReducer