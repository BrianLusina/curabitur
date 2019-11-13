import * as types from "./actionTypes";
import { SocketActions } from "./actionTypes";
import socketInitialState from "./state";

const INITIAL_STATE: socketInitialState = {
    connected: false,
    isError: false,
    port: "3001"
};

/**
 * Socket reducer that takes in redux state and action object and updates the state based
 * on the action type. Uses a switch case to determine which is the appropriate
 * @param {Object} state Redux State
 * @param {Object} action Action object
 */
export default function socketReducer(state = INITIAL_STATE, action: SocketActions): socketInitialState {
    switch (action.type) {
        case types.CONNECTION_CHANGED:
            return {
                ...state,
                connected: action.connected,
                isError: action.isError
            };
        default:
            return state;
    }
}