import { combineReducers } from "redux";
import socket from "./socket/reducer";
import message from "./message/reducer";

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
export const rootReducer = combineReducers({
	socket,
	message
});

export type AppState = ReturnType<typeof rootReducer>;