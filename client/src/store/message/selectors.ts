import { createSelector } from "reselect";
import { AppState } from "Store/rootReducer";

/**
 * Gets all messages from redux store
 * @param state Redux store
 * @returns {Object}
 */
const getAllMessages = (state: AppState) => state.message.messages;

/**
 * Selector to fetch all messages
 */
export const getAllMessagesSelector = createSelector(getAllMessages, allMessages => allMessages);


/**
 * Get username from Redux Store
 * @param state Redux state
 */
const getUsername = (state: AppState) => state.message.username;

/**
 * Get username selector
 */
export const getUsernameSelector = createSelector(getUsername, username => username);