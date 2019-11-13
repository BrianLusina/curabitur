import SocketService from "Services/socket/SocketService";
import { connectionChangedActionCreator } from "Store/socket/actionCreators";
import { CONNECT_SOCKET } from "Store/socket/actionTypes";
import { messageReceivedActionCreator, messageSentActionCreator } from "Store/message/actionCreators";
import { SEND_MESSAGE_REQUEST } from "Store/message/actionTypes";


/**
 * Middleware that will dispatch actions to the redux store and update the state
 * of the store. This will connect to SocketService, a wrapper for socket-io
 * @param {Object} store Redux Store
 */
const socketMiddleware = (store: any) => {

    /**
     * Handler function that dispatches connection Changed action to the store
     * @param {Boolean} isConnected Whether we are connected to web socket
     */
    const onConnectionChanged = (isConnected: boolean, isError: boolean) => {
        store.dispatch(connectionChangedActionCreator(isConnected, isError));
    };

    /**
     * Handler function to dispatch store action on incoming messages
     * @param {Object} message Message
     */
    const onIncomingMessage = (message: { from: string, content: string, time: string }) => {
        store.dispatch(messageReceivedActionCreator(message));
    };

    const socketService = new SocketService(onConnectionChanged, onIncomingMessage);

    return (next: any) => (action: any) => {
        const messageState = store.getState().messages;
        const socketState = store.getState().socket;

        switch (action.type) {
            case CONNECT_SOCKET:
                socketService.connect(messageState.user, process.env.PORT || socketState.port);
                break;

            case SEND_MESSAGE_REQUEST:
                socketService.sendMessage(action.message);
                store.dispatch(messageSentActionCreator);
                break;
            default:
                break;
        }

        return next(action);
    };
};


export default socketMiddleware;