/**
 * Configuration for the Store in production environment
 * This configuration is used when the application is build for production
 * This is normally not imported directly as the ENV variable will determine whether to use this configuration
 * or the development configuration
 */
import {
    createStore,
    compose,
    applyMiddleware
} from "redux";
import { rootReducer, AppState } from "./rootReducer";
import {
    prodMiddleware, devMiddleware
} from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const {NODE_ENV} = process.env;


export default function configureStore(initialState: AppState) {
    if (NODE_ENV === "production") {
        return createStore(rootReducer, initialState, compose(applyMiddleware(...prodMiddleware)));
    } else {
        return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...devMiddleware)));
    }
}