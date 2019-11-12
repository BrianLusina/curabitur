import * as types from "./actionTypes";

/**
 * Connection changed action creator that creates an action used to denote a change
 * in connection to a socket
 * @param {Boolean} isConnected Whether the connection is established
 * @returns {Object}
 */
export const connectionChangedActionCreator = (isConnected: boolean) => {
    return {
        type: types.CONNECTION_CHANGED,
        connected: isConnected,
        isError: false
    };
};


/**
 * Action creator that is used to return an action that denotes
 * a connection to a socket
 * @returns {Object}
 */
export const connectSocketActionCreator = () => {
    return {
        type: types.CONNECT_SOCKET
    };
};
