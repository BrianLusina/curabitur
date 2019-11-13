import { sendMessageActionCreator, changeUsernameActionCreator, messageReceivedActionCreator, messageSentActionCreator } from "./actionCreators";
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_RESPONSE, MESSAGE_SENT, USER_CHANGED } from "./actionTypes";

describe("Message Action Creators", () => {
    it("should create a sendMessageAction", () => {
        const message = {
            from: "John",
            content: "Hello",
            time: "21:00"
        };

        const actualAction = sendMessageActionCreator(message);

        const expectedAction = {
            type: SEND_MESSAGE_REQUEST,
            message
        };

        expect(actualAction).toEqual(expectedAction);
    });

    it("should create a messageReceivedActionCreator", () => {
        const message = {
            from: "Jane",
            content: "Hi",
            time: "21:05"
        };

        const actualAction = messageReceivedActionCreator(message);

        const expectedAction = {
            type: SEND_MESSAGE_RESPONSE,
            message
        };

        expect(actualAction).toEqual(expectedAction);
    });

    it("should create a messageSentActionCreator", () => {

        const actualAction = messageSentActionCreator();

        const expectedAction = {
            type: MESSAGE_SENT
        };

        expect(actualAction).toEqual(expectedAction);
    });

    it("should create a changeUsernameActionCreator", () => {
        const username = "Jack";

        const actualAction = changeUsernameActionCreator(username);

        const expectedAction = {
            type: USER_CHANGED,
            username
        };

        expect(actualAction).toEqual(expectedAction);
    });
});
