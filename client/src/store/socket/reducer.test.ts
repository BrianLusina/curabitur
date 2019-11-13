import reducer from "./reducer";
import * as actions from "./actionCreators";
import state from "./state";

describe("Socket Reducer", () => {
    let initialState: state = {
        connected: false,
        isError: false,
        port: "3001"
    };

    beforeEach(() => {
        initialState = {
            connected: false,
            isError: false,
            port: "3001"
        };
    });

    it("should update connected value to true/false when connectionChangedAction is dispatched", () => {
        const connected = true;
        const isError = true;
        const action = actions.connectionChangedActionCreator(connected, isError);

        const newState = reducer(initialState, action);

        expect(newState.connected).toEqual(connected);

        // dispatch another action
        const newAction = actions.connectionChangedActionCreator(false, isError);

        const newState2 = reducer(newState, newAction);

        expect(newState2.connected).toEqual(false);
    });


    it("should update isError value to false/true when connectionChangedAction is dispatched with error", () => {
        const isError = false;
        const connected = true;
        const action = actions.connectionChangedActionCreator(connected, isError);

        const newState = reducer(initialState, action);

        expect(newState.isError).toEqual(isError);

        // dispatch a new action
        const newAction = actions.connectionChangedActionCreator(connected, true);

        const newState2 = reducer(newState, newAction);

        expect(newState2.isError).toEqual(true);
    });

});
