import { combineReducers } from "redux";
import merchantReducer from "./merchantReducer";
import productReducer from './productReducer';
import userReducer from "./userReducer";

const reducers = combineReducers({
    productReducer: productReducer,
    userReducer: userReducer,
    merchantReducer: merchantReducer
});

export default reducers;