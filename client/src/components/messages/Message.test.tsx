import React from "react";
import { shallow } from "enzyme";
import Message from "./Message";


describe("Message", () => {
    let wrapper: any;
    const props = {
        message: {
            from: "Diggle",
            time: "12:00",
            content: "Run!",
            type: "received"
        }
    };

    beforeEach(() => {
        wrapper = shallow(<Message {...props}/>);
    });

    it("should render without crashing", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should toggle display of a Nickname using message type", () => {
        expect(wrapper.find("Nickname").length).toEqual(1);

        wrapper.setProps({
            message: {
                ...props.message,
                type: "sent"
            }
        });

        expect(wrapper.find("Nickname").length).toEqual(0);
    });

    it("should display Timestamp", () => {
        expect(wrapper.find("Timestamp").length).toEqual(1);
        expect(wrapper.find("Timestamp").props().value).toEqual("12:00");
        expect(wrapper.find("Timestamp").props().floatToRight).toEqual(false);

        wrapper.setProps({
            message: {
                ...props.message,
                time: "12:01",
                type: "sent"
            }
        });

        expect(wrapper.find("Timestamp").props().value).toEqual("12:01");
        expect(wrapper.find("Timestamp").props().floatToRight).toEqual(true);
    });
});
