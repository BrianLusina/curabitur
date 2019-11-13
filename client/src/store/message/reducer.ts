import * as types from "./actionTypes";
import { MessageActions } from "./actionTypes";
import messageInitialState from "./state";
import { readRecord } from "Storage/localStorageService";

const INITIAL_STATE: messageInitialState = {
    username: readRecord("username") || "guest0001",
    messages: []
};

/**
 * Message Reducer
 * @param {Object} state Redux State
 * @param {Object} action Action
 */
export default function messageReducer(state = INITIAL_STATE, action: MessageActions): messageInitialState {
    switch (action.type) {
        case types.USER_CHANGED:
            return {
                ...state,
                username: action.username
            };

        case types.SEND_MESSAGE_RESPONSE:
            const newMessage = {
                ...action.message,
                type: "received"
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        case types.SEND_MESSAGE_REQUEST:
                const sentMessage = {
                    ...action.message,
                    type: "sent"
                };
                return {
                    ...state,
                    messages: [...state.messages, sentMessage]
                };

        default:
            return state;
    }
}