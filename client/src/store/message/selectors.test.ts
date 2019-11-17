import { AppState } from "Store/rootReducer";
import { getAllMessagesSelector, getUsernameSelector } from "./selectors";

describe("Message Selectors", () => {
    let initialState: AppState = {
        message: {
            username: "guest001",
            messages: []
        }
    };

    beforeEach(() => {
        initialState = {
            message: {
                username: "guest001",
                messages: []
            }
        };
    });

    it("should get all messages using getAllMessagesSelector", () => {
        let actualMessages = getAllMessagesSelector(initialState);
        expect(actualMessages).toEqual([]);

        const message = {
            from: "Jack",
            content: "Schematics for Robot Chicken",
            time: "23:00",
            type: "sent"
        };

        initialState = {
            ...initialState,
            message: {
                username: "guest0001",
                messages: [message]
            }
        };

        actualMessages = getAllMessagesSelector(initialState);
        expect(actualMessages.length).toEqual(1);
        expect(actualMessages[0]).toEqual(message);
    });

    it("should get username using getUsernameSelector", () => {
        let actualUsername = getUsernameSelector(initialState);
        expect(actualUsername).toEqual("guest001");

        initialState = {
            ...initialState,
            message: {
                username: "jack002",
                messages: []
            }
        };

        actualUsername = getUsernameSelector(initialState);
        expect(actualUsername).toEqual("jack002");
    });
});