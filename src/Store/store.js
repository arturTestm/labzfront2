import {createStore} from "redux";
import rootReducers from "./Reducers";
import {saveState, loadState} from "./localStorage";
const throttle = require('lodash.throttle');

const store = createStore(rootReducers, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() => {
    saveState({
        counter: store.getState().counter,
    })
}, 1000));

export default store;