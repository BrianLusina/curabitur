import { shallow } from "enzyme";
import React from "react";
import { render } from "react-dom";
import TranslationsProvider from "./TranslationsProvider";


describe("TranslationsProvider", () => {
    const props = {
        children: <div />
    };

    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<TranslationsProvider {...props} />);
    });

    it("renders without crashing", () => {
        render(<TranslationsProvider {...props}/>, document.createElement("div"));
    });

    it("should have state defaulted to en translations", () => {
        expect(wrapper.state().translations.langCode).toEqual("EN");
    });

    it("should have translation change when handleLanguageChange is triggered", () => {
        wrapper.instance().handleLanguageChange();
        expect(wrapper.state().translations.langCode).toEqual("DE");

        wrapper.instance().handleLanguageChange();
        expect(wrapper.state().translations.langCode).toEqual("EN");
    });
});
