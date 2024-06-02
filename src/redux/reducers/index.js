import { combineReducers } from "redux";
import  'alertifyjs/build/css/alertify.min.css'
import changeCategoryReducer  from "./changeCategoryReducer";
import categoryListReducer  from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";

const reducers = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer,
})

export default reducers;