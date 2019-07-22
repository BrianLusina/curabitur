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
import { rootReducer } from "../reducers/rootReducer";
import {
  prodMiddleware
} from "./middleware";

// @ts-ignore
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...prodMiddleware)));

  return {
    store,
  };
}