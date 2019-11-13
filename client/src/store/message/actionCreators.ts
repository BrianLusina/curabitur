import * as types from "./actionTypes";
import { Message } from "./types";
import { MessageActions } from "./actionTypes";

export const messageReceivedActionCreator = (message: Message): MessageActions => {
    return {
      type: types.SEND_MESSAGE_RESPONSE,
      message
    };
};

export const sendMessageActionCreator = (message: Message): MessageActions => {
    return {
        type: types.SEND_MESSAGE_REQUEST,
        message
    };
};

export const messageSentActionCreator = (): MessageActions => {
    return {
        type: types.MESSAGE_SENT
    };
};

export const changeUsernameActionCreator = (username: string): MessageActions => {
    return {
        type: types.USER_CHANGED,
        username
    };
};