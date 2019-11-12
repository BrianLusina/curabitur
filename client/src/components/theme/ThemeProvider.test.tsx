import { shallow } from "enzyme";
import React from "react";
import { render } from "react-dom";
import ThemeProvider from "./ThemeProvider";


describe("ThemeProvider", () => {
    const props = {
        children: <div />
    };

    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<ThemeProvider {...props} />);
    });

    it("renders without crashing", () => {
        render(<ThemeProvider {...props}/>, document.createElement("div"));
    });

    it("should have state defaulted to light theme", () => {
        expect(wrapper.state().colorTheme.secondaryLightColor).toEqual("#ed7a7a");
    });

    it("should have theme change when handleTheme is triggered", () => {
        wrapper.instance().handleThemeChange();
        expect(wrapper.state().colorTheme.secondaryLightColor).toEqual("#777");

        wrapper.instance().handleThemeChange();
        expect(wrapper.state().colorTheme.secondaryLightColor).toEqual("#ed7a7a");
    });
});
