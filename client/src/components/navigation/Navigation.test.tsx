import React from "react";
import { shallow } from "enzyme";
import { render } from "react-dom";
import sinon from "sinon";
import { Navigation } from "./Navigation";


describe("Navigation", () => {
    const props = {
        messages: [],
        username: "guest001",
        theme: {},
        translations: {},
        connectToSockets: jest.fn()
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navigation {...props} />);
    });

    it("should render without crashing", () => {
        render(<Navigation {...props}/>, document.createElement("div"));
    });

    it("should call connectToSockets on componentDidMount", () => {
        sinon.spy(Navigation.prototype, "componentDidMount");
        expect(props.connectToSockets).toHaveBeenCalled();
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