/**
 * Configuration for the Store in production environment
 * This configuration is used when the application is build for production
 * This is normally not imported directly as the ENV variable will determine whether to use this configuration
 * or the development configuration
 */
/*eslint-disable */
import {
    createStore,
    applyMiddleware
} from "redux";
import {
    composeWithDevTools
} from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";
import {
    devMiddleware
} from "./middleware";

// @ts-ignore
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...devMiddleware)));

    return {
        store
    };
}