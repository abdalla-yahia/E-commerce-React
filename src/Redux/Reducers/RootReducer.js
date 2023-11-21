import categoriesReducer from './CategoryReducers';
import getAllBrandsReducer from './BrandsReducer';

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    brands: getAllBrandsReducer
})

export default rootReducer