import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Reducers/RootReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk]
const initiaState ={}

const Store = createStore(rootReducer,initiaState,composeWithDevTools(applyMiddleware(...middleware)));

export default Store;