import React from "react";
import { shallow } from "enzyme";
import { render } from "react-dom";
import UnreadMessagesCounter from "./UnreadMessagesCounter";

describe("UnreadMessagesCounter", () => {
    const props = {
        count: 0
    };

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<UnreadMessagesCounter {...props}/>);
    });

    it("should render without crashing", () => {
        render(<UnreadMessagesCounter {...props}/>, document.createElement("div"));
    });

    it("should render only when count > 0", () => {
        wrapper.setProps({
            count: 0
        });

        expect(wrapper.text()).toBe("");

        wrapper.setProps({
            count: 12
        });

        expect(wrapper.text()).toBe("12");
  });
});
