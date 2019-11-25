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
});