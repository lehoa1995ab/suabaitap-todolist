import { createStore } from "redux";
import countReducer from "../redux.jsx/counter/reducer";
export const store = createStore(countReducer)
