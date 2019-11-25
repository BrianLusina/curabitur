import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { MessageSender } from "./MessageSender";
import * as TimeUtils from "TimeUtils";
import * as LocalStorage from "Storage/localStorageService";

describe("MessageSender", () => {
    const props = {
        sendMessage: jest.fn(),
        actions: {
            sendMessageActionCreator: jest.fn()
        }
    };

    type Props = {
        sendMessage: (message: { from: string, content: string, time: string }) => void,
        actions: {
            sendMessageActionCreator: (message: { from: string, content: string, time: string }) => void
        },
    };

    type State = {
        username: string,
        chatmessage: string
    };

    let wrapper: ShallowWrapper<Props, State>;

    beforeEach(() => {
        wrapper = shallow(<MessageSender {...props} />);
        jest.spyOn(TimeUtils, "getTime24Hours")
            .mockImplementationOnce(() => "13:00");

        jest.spyOn(TimeUtils, "getTime12hours")
            .mockImplementationOnce(() => "02:00pm");
    });

    it("should render without crash", () => {
        expect(wrapper).not.toBe(null);
    });

    describe("should get current time when getTime instance function is called", () => {
        let mock: jest.SpyInstance<string | null, [string]>;

        beforeEach(() => {
            mock = jest.spyOn(LocalStorage, "readRecord");
        });

        afterEach(() => {
            mock.mockClear();
        });

        it("when clockMode is 12", () => {
            mock.mockImplementationOnce(() => "12");
            // @ts-ignore
            const actualTime = wrapper.instance().getTime();

            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith("clockMode");
            expect(actualTime).toEqual("02:00pm");
        });

        it("when clockMode is 24", () => {
            mock.mockImplementationOnce(() => "24");

            // @ts-ignore
            const actualTime = wrapper.instance().getTime();

            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledWith("clockMode");
            expect(actualTime).toEqual("13:00");
        });
    });

    describe("should send chat message when sendMessage instance function is called", () => {
        it("when chat message is empty, sendMessage action should not be triggered", () => {
            wrapper.setState({
                username: "guest001",
                chatmessage: ""
            });

            // @ts-ignore
            wrapper.instance().sendChatMessage();

            expect(props.sendMessage).toHaveBeenCalledTimes(0);
        });

        it("when chat message is not empty, sendMessage action should be triggered", () => {
            wrapper.setState({
                username: "guest001",
                chatmessage: "Hello"
            });

            // @ts-ignore
            wrapper.instance().sendChatMessage();

            expect(props.sendMessage).toHaveBeenCalledTimes(1);
            expect(props.sendMessage).toHaveBeenCalledWith({
                from: "guest001",
                content: "Hello",
                // @ts-ignore
                time: wrapper.instance().getTime()
            });
        });
    });

    it("should clear message input when clearMessageInput instance method is called", () => {
        wrapper.setState({
            chatmessage: "Hello"
        });

        // @ts-ignore
        const spy = jest.spyOn(wrapper.instance(), "focusTextInput");

        // @ts-ignore
        wrapper.instance().clearMessageInput();

        expect(wrapper.state().chatmessage).toEqual("");
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should send message and clear input when handleClick instance method is clicked", () => {
        // @ts-ignore
        const sendMessagSpy = jest.spyOn(wrapper.instance(), "sendChatMessage");

        // @ts-ignore
        const clearMessageInputSpy = jest.spyOn(wrapper.instance(), "clearMessageInput");

        // @ts-ignore
        wrapper.instance().handleClick();

        expect(sendMessagSpy).toHaveBeenCalledTimes(1);
        expect(clearMessageInputSpy).toHaveBeenCalledTimes(1);
    });

    it("should set state of chatmessage when handleOnChange is called", () => {
        // @ts-ignore
        wrapper.instance().handleOnChange({ currentTarget: { value: "Hello" }});

        expect(wrapper.state().chatmessage).toEqual("Hello");
    });

    describe("should call sendOnPressCtrlEnter", () => {
        it("and trigger sendChatMessage and clearMessageInput instance functions when pressedKeyMap has CTRL & ENTER", () => {
            const instance = wrapper.instance();

            // @ts-ignore
            const sendMessageSpy = jest.spyOn(instance, "sendChatMessage");

            // @ts-ignore
            const clearMessageSpy = jest.spyOn(instance, "clearMessageInput");

            // @ts-ignore
            instance.pressedKeysMap = {
                ENTER: "Enter",
                CTRL: "Control"
            };

            // @ts-ignore
            instance.sendOnPressCtrlEnter();

            expect(sendMessageSpy).toHaveBeenCalledTimes(1);
            expect(clearMessageSpy).toHaveBeenCalledTimes(1);
        });

        it("and not trigger sendChatMessage and clearMessageInput instance functions when pressedKeyMap is empty", () => {
            const instance = wrapper.instance();

            // @ts-ignore
            const sendMessageSpy = jest.spyOn(instance, "sendChatMessage");

            // @ts-ignore
            const clearMessageSpy = jest.spyOn(instance, "clearMessageInput");

            // @ts-ignore
            instance.pressedKeysMap = {};

            // @ts-ignore
            instance.sendOnPressCtrlEnter();

            expect(sendMessageSpy).toHaveBeenCalledTimes(0);
            expect(clearMessageSpy).toHaveBeenCalledTimes(0);
        });
    });

    describe("should call sendOnPressEnter", () => {
        it("and trigger sendChatMessage and clearMessageInput instance functions when pressedKeyMap has ENTER", () => {
            const instance = wrapper.instance();

            // @ts-ignore
            const sendMessageSpy = jest.spyOn(instance, "sendChatMessage");

            // @ts-ignore
            const clearMessageSpy = jest.spyOn(instance, "clearMessageInput");

            // @ts-ignore
            instance.pressedKeysMap = {
                ENTER: "Enter"
            };

            // @ts-ignore
            instance.sendOnPressEnter();

            expect(sendMessageSpy).toHaveBeenCalledTimes(1);
            expect(clearMessageSpy).toHaveBeenCalledTimes(1);
        });

        it("and not trigger sendChatMessage and clearMessageInput instance functions when pressedKeyMap is empty", () => {
            const instance = wrapper.instance();

            // @ts-ignore
            const sendMessageSpy = jest.spyOn(instance, "sendChatMessage");

            // @ts-ignore
            const clearMessageSpy = jest.spyOn(instance, "clearMessageInput");

            // @ts-ignore
            instance.pressedKeysMap = {};

            // @ts-ignore
            instance.sendOnPressEnter();

            expect(sendMessageSpy).toHaveBeenCalledTimes(0);
            expect(clearMessageSpy).toHaveBeenCalledTimes(0);
        });
    });

    it("should clear pressedKeyMap when handleKeyUp is triggered", () => {
        // @ts-ignore
        wrapper.instance().pressedKeysMap = {
            ENTER: "Enter",
            CTRL: "Control"
        };

        // @ts-ignore
        wrapper.instance().handleKeyUp();

        // @ts-ignore
        expect(wrapper.instance().pressedKeysMap).toEqual({});
    });

    describe("should call handleKeyPress", () => {
        let mock: jest.SpyInstance<string | null, [string]>;

        beforeEach(() => {
            mock = jest.spyOn(LocalStorage, "readRecord");
        });

        afterEach(() => {
            mock.mockClear();
        });

        it("and call sendOnPressCtrlEnter when ctrlEnterSending is on", () => {
            const instance = wrapper.instance();

            mock.mockImplementationOnce(() => "On");

            // @ts-ignore
            const sendOnPressCtrlEnterSpy = jest.spyOn(instance, "sendOnPressCtrlEnter");

            const keyboardEvent = {
                type: "keydown",
                key: "Enter"
            };

            // @ts-ignore
            instance.handleKeyPress(keyboardEvent);

            expect(sendOnPressCtrlEnterSpy).toHaveBeenCalledTimes(1);
        });

        it("and call sendOnPressEnter when ctrlEnterSending is off", () => {
            const instance = wrapper.instance();

            mock.mockImplementationOnce(() => "Off");

            // @ts-ignore
            const sendOnPressEnterSpy = jest.spyOn(instance, "sendOnPressEnter");

            const keyboardEvent = {
                type: "keydown",
                key: "Enter"
            };

            // @ts-ignore
            instance.handleKeyPress(keyboardEvent);

            expect(sendOnPressEnterSpy).toHaveBeenCalledTimes(1);
        });
    });

    it("should call sendChatMessage on click Send button", () => {
        const instance = wrapper.instance();

        // @ts-ignore
        const spy = jest.spyOn(instance, "sendChatMessage");
        wrapper.find("button").simulate("click");
        expect(spy).toHaveBeenCalledTimes(1);
      });

    it("should clear send messages input on click Send button", () => {
        const instance = wrapper.instance();
        instance.setState({ chatmessage: "test" }, () => {
            expect(wrapper.find("input").props().value).toBe("test");
        });

        wrapper.find("button").simulate("click");
        expect(wrapper.find("input").props().value).toBe("");
    });
});