import { createStore, combineReducers, compose } from "redux";

import storeReducerScreen1 from "../Screen1/Store/storeReducer";
import storeNavigation from "../Navigation/Store/storeReducer"

let composeEnhancers  = compose;

// eslint-disable-next-line no-undef
if(__DEV__){
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const rootReducer = combineReducers({
    reducer: storeReducerScreen1,
    navigationReducer:storeNavigation
});

const configureStore = () => (
     createStore(rootReducer, composeEnhancers())
)

export default configureStore;