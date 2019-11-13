import { Message } from "./types";

export const SEND_MESSAGE_RESPONSE = "SEND_MESSAGE_RESPONSE";
export const MESSAGE_SENT = "MESSAGE_SENT";
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const USER_CHANGED = "USER_CHANGED";

interface UserChangedAction {
    type: typeof USER_CHANGED;
    username: string;
}

interface ReceiveMessageAction {
    type: typeof SEND_MESSAGE_RESPONSE;
    message: Message;
}

interface SendMessageAction {
    type: typeof SEND_MESSAGE_REQUEST;
    message: Message;
}

interface MessageSentAction {
    type: typeof MESSAGE_SENT;
}

export type MessageActions = UserChangedAction | ReceiveMessageAction | SendMessageAction | MessageSentAction;