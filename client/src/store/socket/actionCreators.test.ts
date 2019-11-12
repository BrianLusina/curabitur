import { connectionChangedActionCreator, connectSocketActionCreator } from "./actionCreators";
import { CONNECTION_CHANGED, CONNECT_SOCKET } from "./actionTypes";

describe("Socket Action Creator", () => {
    it("should create an action to handle change in connection", () => {
        const isConnected = true;

        const actualAction = connectionChangedActionCreator(isConnected);

        const expectedAction = {
            type: CONNECTION_CHANGED,
            connected: isConnected,
            isError: false
        };

        expect(actualAction).toEqual(expectedAction);
    });

    it("should create an action to handle connection to a socket", () => {
        const actualAction = connectSocketActionCreator();

        const expectedAction = {
            type: CONNECT_SOCKET
        };

        expect(actualAction).toEqual(expectedAction);
    });
});
