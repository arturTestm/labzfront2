import {combineReducers} from "redux";

// Import all reducers here
import counterReducer from "./counter";

const rootReducers = combineReducers({
    // List of reducers to load
    counterReducer,
})

export default rootReducers;