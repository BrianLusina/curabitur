export const CONNECTION_CHANGED = "CONNECTION_CHANGED";
export const CONNECT_SOCKET = "CONNECT_SOCKET";

interface ConnectionChangedAction {
    type: typeof CONNECTION_CHANGED;
    connected: boolean;
    isError: boolean;
}

interface ConnectSocketAction {
    type: typeof CONNECT_SOCKET;
}

export type SocketActions = ConnectionChangedAction | ConnectSocketAction;