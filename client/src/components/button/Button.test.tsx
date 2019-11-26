import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Button from "./Button";

describe("Button", () => {
    type Props = {
        text: string,
        handleClick: () => void
    };

    let wrapper: ShallowWrapper<Props>;

    const props: Props = {
        text: "Reset",
        handleClick: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<Button {...props} />);
    });

    it("should render", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should display text passed in from props", () => {
        const actual = wrapper.find("button").text();

        expect(actual).toEqual(props.text);

        wrapper.setProps({
            text: "Yo!"
        });

        expect(wrapper.find("button").text()).toEqual("Yo!");

    });

    it("should trigger prop handler function on click", () => {
        wrapper.find("button").simulate("click");

        expect(props.handleClick).toHaveBeenCalled();
    });
});