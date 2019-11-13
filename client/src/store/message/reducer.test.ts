import reducer from "./reducer";
import * as actions from "./actionCreators";
import state from "./state";
import { Message } from "./types";

describe("Message Reducer", () => {
    let initialState: state = {
        username: "guest0001",
        messages: []
    };

    beforeEach(() => {
        initialState = {
            username: "guest0001",
            messages: []
        };
    });

    it("should update username when user changed action is dispatched", () => {
        expect(initialState.username).toEqual("guest0001");

        const username = "jack";
        const action = actions.changeUsernameActionCreator(username);

        const newState = reducer(initialState, action);

        expect(newState.username).toEqual(username);
    });

    it("should update messages when a message is received", () => {
        const message: Message = {
            content: "Hello",
            from: "Jane",
            time: "21:00"
        };

        const action = actions.messageReceivedActionCreator(message);

        const newState = reducer(initialState, action);

        expect(newState.messages.length).toEqual(1);

        const messageInState = newState.messages[0];

        expect(messageInState.from).toEqual(message.from);

        // the message in the store should have a property of type 'received'
        expect(messageInState.type).toEqual("received");

        // dispatch new action
        const newMessage: Message = {
            content: "Hello",
            from: "Jane",
            time: "21:05"
        };

        const newAction = actions.messageReceivedActionCreator(newMessage);

        const newState2 = reducer(newState, newAction);

        expect(newState2.messages.length).toEqual(2);

        const newMessageInState = newState2.messages[1];

        expect(newMessageInState.from).toEqual(newMessage.from);

        expect(newMessageInState.type).toEqual("received");
    });

    it("should update messages when a message is sent", () => {
        const message: Message = {
            content: "Hello",
            from: "guest0001",
            time: "21:00"
        };

        const action = actions.sendMessageActionCreator(message);

        const newState = reducer(initialState, action);

        expect(newState.messages.length).toEqual(1);

        const messageInState = newState.messages[0];

        expect(messageInState.from).toEqual(message.from);

        // the message in the store should have a property of type 'received'
        expect(messageInState.type).toEqual("sent");

        // dispatch new action
        const newMessage: Message = {
            content: "Hello",
            from: "guest0001",
            time: "21:05"
        };

        const newAction = actions.sendMessageActionCreator(newMessage);

        const newState2 = reducer(newState, newAction);

        expect(newState2.messages.length).toEqual(2);

        const newMessageInState = newState2.messages[1];

        expect(newMessageInState.from).toEqual(newMessage.from);

        // the message in the store should have a property of type 'sent'
        expect(newMessageInState.type).toEqual("sent");
    });
});
