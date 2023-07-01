import { createStore, combineReducers } from "redux";
import countReducer from "./counter/reducer";
import productReducer from './product/reducer';

const rootReducer = combineReducers({
    countStore: countReducer,
    productReducer: productReducer
  });
  
  export const store = createStore(rootReducer);