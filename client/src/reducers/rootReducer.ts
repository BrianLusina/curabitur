import { combineReducers } from "redux";
import ajax from "./ajaxReducer";
import notifications from "../notifications/notificationReducer";

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
export const rootReducer = combineReducers({
    ajax,
    notifications
});

export type AppState = ReturnType<typeof rootReducer>;