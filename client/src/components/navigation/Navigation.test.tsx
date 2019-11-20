import React from "react";
import { shallow } from "enzyme";
import { render } from "react-dom";
import sinon from "sinon";
import { Navigation } from "./Navigation";
import translations from "Translations/translations-mock";

describe("Navigation", () => {
    const props = {
        messages: [],
        username: "guest001",
        theme: {},
        translations,
        actions: {
            connectSocketActionCreator: jest.fn()
        },
        connectToSockets: jest.fn()
    };
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<Navigation {...props} />);

        jest.mock("DomUtils", () => ({
            __esModule: true,
            isPageActive: jest.fn().mockReturnValue(true)
        }));
   });

    it("should render without crashing", () => {
        expect(wrapper).not.toBe(null);
        // can't use render because <NavLink /> can't be used outisde of <Router /> when testing
        // render(<Navigation {...props}/>, document.createElement("div"));
    });

    it("should call connectToSockets on componentDidMount", () => {
        sinon.spy(Navigation.prototype, "componentDidMount");
        expect(props.actions.connectSocketActionCreator).toHaveBeenCalled();
    });

    it("should call connectToSockets on componentDidUpdate", () => {
        wrapper.setProps({
            messages: [
                {
                    from: "Jane",
                    content: "Save the Planet",
                    type: "received",
                    time: "21:00"
                }
            ]
        });

        // sinon.spy(Navigation.prototype, "componentDidUpdate");

        expect(wrapper.state().receivedUnreadMessages.length).toEqual(1);
    });

    it("should set startBlinking to true when startBlinking method is called", () => {
        expect(wrapper.state().shouldBlink).toEqual(false);

        wrapper.instance().handleBlinking();

        expect(wrapper.state().shouldBlink).toEqual(true);
    });

    it("should set unreadMessages count when updateUnreadMessagesCount is called", () => {
        expect(wrapper.state().unreadMessages).toEqual(0);

        wrapper.setState({
            receivedUnreadMessages: [{}, {}, {}]
        });

        wrapper.instance().updateUnreadMessagesCount();

        expect(wrapper.state().unreadMessages).toEqual(3);
    });

    it("should set unreadMessages count to 0 and receivedUnreadMessages to [] when clearNotifications is called", () => {
        wrapper.setState({
            unreadMessages: 3,
            shouldBlink: true,
            receivedUnreadMessages: [{}, {}, {}]
        });

        expect(wrapper.state().unreadMessages).toEqual(3);
        expect(wrapper.state().receivedUnreadMessages).toEqual([{}, {}, {}]);

        wrapper.instance().clearNotifications();

        expect(wrapper.state().unreadMessages).toEqual(0);
        expect(wrapper.state().receivedUnreadMessages).toEqual([]);
        expect(wrapper.state().shouldBlink).toEqual(false);
    });
});