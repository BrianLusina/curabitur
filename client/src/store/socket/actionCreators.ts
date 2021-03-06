import * as types from "./actionTypes";
import { SocketActions } from "./actionTypes";

/**
 * Connection changed action creator that creates an action used to denote a change
 * in connection to a socket
 * @param {Boolean} isConnected Whether the connection is established
 * @returns {Object}
 */
export const connectionChangedActionCreator = (isConnected: boolean, isError: boolean): SocketActions => {
    return {
        type: types.CONNECTION_CHANGED,
        connected: isConnected,
        isError
    };
};


/**
 * Action creator that is used to return an action that denotes
 * a connection to a socket
 * @returns {Object}
 */
export const connectSocketActionCreator = (): SocketActions => {
    return {
        type: types.CONNECT_SOCKET
    };
};
