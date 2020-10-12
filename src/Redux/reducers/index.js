import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";



const rootReducer = combineReducers({
    // reducerCon
    // gioHangReducer : gioHangReducer, (key : value )
    gioHangReducer,
});

export default rootReducer;