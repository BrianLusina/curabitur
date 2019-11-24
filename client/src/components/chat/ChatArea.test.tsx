import { shallow } from "enzyme";
import React from "react";
import { ChatArea } from "./ChatArea";

describe("ChatArea component", () => {
    const props = {
        messages: [
            {
                from: "test",
                content: "test test",
                time: "11:11",
                type: "sent"
            }
        ]
    };

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<ChatArea {...props}/>);
    });

    it("renders without crashing", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should render correct number of messages", () => {
        expect(wrapper.find("Message").length).toEqual(1);
    });
});
