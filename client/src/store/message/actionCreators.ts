import * as types from "./actionTypes";

export const messageReceivedActionCreator = (message: { from: string, content: string, time: string }) => {
    return {
      type: types.SEND_MESSAGE_RESPONSE,
      message
    };
};

export const sendMessageActionCreator = (message: { from: string, content: string, time: string }) => {
    return {
        type: types.SEND_MESSAGE_REQUEST,
        message
    };
};

export const messageSentActionCreator = () => {
    return {
        type: types.MESSAGE_SENT
    };
};

export const changeUsernameActionCreator = (username: string) => {
    return {
        type: types.USER_CHANGED,
        username
    };
};