import { shallow } from "enzyme";
import * as React from "react";
import Timestamp from ".";

describe("Timestamp component", () => {
    let wrapper: any;
    const props = {
        value: "",
        floatToRight: false
    };

    beforeEach(() => {
        wrapper = shallow(<Timestamp {...props} />);
    });

    it("renders without crashing", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should be able to render properly value passed as prop", () => {
        expect(wrapper.text()).toBe("");

        wrapper.setProps({
            value: "11:22"
        });
        expect(wrapper.text()).toBe("11:22");
    });
});
