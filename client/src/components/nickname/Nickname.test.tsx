import { shallow } from "enzyme";
import * as React from "react";
import Nickname from ".";


describe("Nickname component", () => {
    let wrapper: any;
    const props = {
        value: "John"
    };

    beforeEach(() => {
        wrapper = shallow(<Nickname {...props} />);
    });

    it("renders without crashing", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should render user name if given", () => {
        expect(wrapper.text()).toBe("John");

        wrapper.setProps({
            value: "guest0001"
        });
        expect(wrapper.text()).toBe("guest0001");
    });
});
